"use client";

import { useEffect, useState } from "react";
import type {
  DownloadArchitecture,
  DownloadFormat,
  DownloadPlatform,
  ReleaseCatalog,
  ReleaseFile,
} from "@/domain/entities/download";
import FlutterPainterDownloadCard, {
  type DownloadLabels,
} from "@/presentation/components/projects/FlutterPainterDownloadCard";
import FlutterPainterReleaseLinks from "@/presentation/components/projects/FlutterPainterReleaseLinks";

interface FlutterPainterDownloadCardsProps {
  catalog: ReleaseCatalog;
  labels: DownloadLabels;
}

interface DetectedPlatform {
  os: DownloadPlatform | null;
  architecture: DownloadArchitecture;
}

interface UserAgentData {
  platform?: string;
  mobile?: boolean;
  getHighEntropyValues?: (
    hints: string[],
  ) => Promise<{ architecture?: string }>;
}

function detectMacArchitecture(): DownloadArchitecture {
  try {
    const context = document.createElement("canvas").getContext("webgl");
    const extension = context?.getExtension("WEBGL_debug_renderer_info");
    const renderer = extension
      ? String(context?.getParameter(extension.UNMASKED_RENDERER_WEBGL))
      : "";
    if (/intel|amd|radeon|nvidia|geforce/i.test(renderer)) return "x64";
  } catch {
    return "arm64";
  }
  return "arm64";
}

async function detectPlatform(): Promise<DetectedPlatform> {
  const userAgent = navigator.userAgent;
  const userAgentData = (navigator as Navigator & { userAgentData?: UserAgentData })
    .userAgentData;
  if (userAgentData?.mobile || /Android|iPhone|iPad|iPod|CrOS/i.test(userAgent)) {
    return { os: null, architecture: "x64" };
  }

  const hint = userAgentData?.platform?.toLowerCase();
  let os: DownloadPlatform | null = null;
  if (hint === "windows" || /Windows/i.test(userAgent)) os = "windows";
  else if (hint === "macos" || /Macintosh|Mac OS X/i.test(userAgent)) {
    os = navigator.maxTouchPoints > 1 ? null : "macos";
  } else if (hint === "linux" || /Linux|X11/i.test(userAgent)) os = "linux";
  if (!os) return { os: null, architecture: "x64" };

  let architecture: DownloadArchitecture = /aarch64|arm64|armv8/i.test(userAgent)
    ? "arm64"
    : "x64";
  let architectureKnown = false;
  try {
    const highEntropy = await userAgentData?.getHighEntropyValues?.([
      "architecture",
    ]);
    if (highEntropy?.architecture) {
      architecture = highEntropy.architecture.toLowerCase().startsWith("arm")
        ? "arm64"
        : "x64";
      architectureKnown = true;
    }
  } catch {
    architectureKnown = false;
  }
  if (os === "macos" && !architectureKnown) {
    architecture = detectMacArchitecture();
  }
  return { os, architecture };
}

function getFile(
  files: ReleaseFile[],
  platform: DownloadPlatform,
  architecture: DownloadArchitecture,
  format: DownloadFormat,
) {
  return files.find(
    (file) =>
      file.platform === platform &&
      file.architecture === architecture &&
      file.format === format,
  );
}

function omitFiles(all: ReleaseFile[], used: (ReleaseFile | undefined)[]) {
  return all.filter((file) => !used.includes(file));
}

export default function FlutterPainterDownloadCards({
  catalog,
  labels,
}: FlutterPainterDownloadCardsProps) {
  const [detected, setDetected] = useState<DetectedPlatform | null>(null);

  useEffect(() => {
    let live = true;
    detectPlatform()
      .then((platform) => live && setDetected(platform))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  const filesFor = (platform: DownloadPlatform) =>
    catalog.files.filter((file) => file.platform === platform);
  const windowsFiles = filesFor("windows");
  const macFiles = filesFor("macos");
  const linuxFiles = filesFor("linux");
  const windowsPrimary = getFile(catalog.files, "windows", "x64", "installer");
  const macArchitecture =
    detected?.os === "macos" ? detected.architecture : "arm64";
  const macPrimary =
    getFile(catalog.files, "macos", macArchitecture, "dmg") ?? macFiles[0];
  const linuxArchitecture =
    detected?.os === "linux" ? detected.architecture : "x64";
  const linuxDeb = getFile(catalog.files, "linux", linuxArchitecture, "deb");
  const linuxRpm = getFile(catalog.files, "linux", linuxArchitecture, "rpm");

  return (
    <>
      <div className="grid gap-6 text-left lg:grid-cols-3">
        <FlutterPainterDownloadCard
          platform="windows"
          title={labels.windowsTitle}
          note={labels.windowsNote}
          primaryFiles={windowsPrimary ? [windowsPrimary] : []}
          otherFiles={omitFiles(windowsFiles, [windowsPrimary])}
          recommended={detected?.os === "windows"}
          labels={labels}
        />
        <FlutterPainterDownloadCard
          platform="macos"
          title={labels.macosTitle}
          note={labels.macosNote}
          primaryFiles={macPrimary ? [macPrimary] : []}
          otherFiles={omitFiles(macFiles, [macPrimary])}
          recommended={detected?.os === "macos"}
          labels={labels}
        />
        <FlutterPainterDownloadCard
          platform="linux"
          title={labels.linuxTitle}
          note={
            linuxArchitecture === "arm64"
              ? labels.linuxArm64Note
              : labels.linuxX64Note
          }
          detail={labels.linuxOtherArchitectureNote}
          primaryFiles={[linuxDeb, linuxRpm].filter(
            (file): file is ReleaseFile => Boolean(file),
          )}
          otherFiles={omitFiles(linuxFiles, [linuxDeb, linuxRpm])}
          recommended={detected?.os === "linux"}
          labels={labels}
        />
      </div>
      <FlutterPainterReleaseLinks catalog={catalog} labels={labels} />
    </>
  );
}
