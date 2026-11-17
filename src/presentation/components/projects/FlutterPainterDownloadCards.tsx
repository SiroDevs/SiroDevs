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

interface FlutterPainterDownloadCardsProps {
  catalog: ReleaseCatalog;
  labels: DownloadLabels;
}

function detectPlatform(): DownloadPlatform | null {
  const platform = `${navigator.userAgent} ${navigator.platform}`;
  if (/android|iphone|ipad/i.test(platform)) return null;
  if (/windows/i.test(platform)) return "windows";
  if (/mac/i.test(platform)) return "macos";
  if (/linux/i.test(platform)) return "linux";
  return null;
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

function PlatformCards({
  catalog,
  labels,
  recommended,
}: FlutterPainterDownloadCardsProps & {
  recommended: DownloadPlatform | null;
}) {
  const windowsFiles = catalog.files.filter((file) => file.platform === "windows");
  const macFiles = catalog.files.filter((file) => file.platform === "macos");
  const linuxFiles = catalog.files.filter((file) => file.platform === "linux");
  const windowsInstaller = getFile(catalog.files, "windows", "x64", "installer");
  const macDownloads = [
    getFile(catalog.files, "macos", "arm64", "dmg"),
    getFile(catalog.files, "macos", "x64", "dmg"),
  ].filter((file): file is ReleaseFile => Boolean(file));
  const linuxDownloads = [
    getFile(catalog.files, "linux", "x64", "deb"),
    getFile(catalog.files, "linux", "x64", "rpm"),
  ].filter((file): file is ReleaseFile => Boolean(file));

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <FlutterPainterDownloadCard
        title={labels.windowsTitle}
        description={labels.windowsDescription}
        files={windowsFiles}
        primaryFiles={windowsInstaller ? [windowsInstaller] : []}
        recommended={recommended === "windows"}
        labels={labels}
      />
      <FlutterPainterDownloadCard
        title={labels.macosTitle}
        description={labels.macosDescription}
        files={macFiles}
        primaryFiles={macDownloads}
        recommended={recommended === "macos"}
        labels={labels}
      />
      <FlutterPainterDownloadCard
        title={labels.linuxTitle}
        description={labels.linuxDescription}
        files={linuxFiles}
        primaryFiles={linuxDownloads}
        recommended={recommended === "linux"}
        labels={labels}
      />
    </div>
  );
}

export default function FlutterPainterDownloadCards({
  catalog,
  labels,
}: FlutterPainterDownloadCardsProps) {
  const [recommended, setRecommended] = useState<DownloadPlatform | null>(null);

  useEffect(() => {
    setRecommended(detectPlatform());
  }, []);

  return (
    <>
      <PlatformCards
        catalog={catalog}
        labels={labels}
        recommended={recommended}
      />
      <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-cloud-soft">
        {catalog.version && (
          <span>
            {labels.version} {catalog.version}
          </span>
        )}
        <a
          href={catalog.releaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-cloud"
        >
          {labels.releaseNotes}
        </a>
        <a
          href={catalog.checksumsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-cloud"
        >
          {labels.checksums}
        </a>
      </div>
    </>
  );
}
