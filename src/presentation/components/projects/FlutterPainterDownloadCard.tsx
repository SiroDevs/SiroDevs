"use client";

import { ChevronDown, Download } from "lucide-react";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";
import type {
  DownloadArchitecture,
  DownloadFormat,
  DownloadPlatform,
  ReleaseFile,
} from "@/domain/entities/download";

export interface DownloadLabels {
  recommended: string;
  otherDownloads: string;
  selectPackage: string;
  windowsTitle: string;
  windowsNote: string;
  windowsArchitecture: string;
  macosTitle: string;
  macosNote: string;
  appleSilicon: string;
  intelMac: string;
  linuxTitle: string;
  linuxX64Note: string;
  linuxArm64Note: string;
  linuxOtherArchitectureNote: string;
  windowsButton: string;
  macButton: string;
  linuxDebButton: string;
  linuxRpmButton: string;
  portableNoInstall: string;
  formats: Record<DownloadFormat, string>;
  architecture: Record<DownloadArchitecture, string>;
  releaseNotes: string;
  checksums: string;
  version: string;
  supportPrompt: string;
  emailSupport: string;
}

const architectureName = (file: ReleaseFile, labels: DownloadLabels) =>
  file.platform === "macos"
    ? file.architecture === "arm64"
      ? labels.appleSilicon
      : labels.intelMac
    : file.platform === "windows"
      ? labels.windowsArchitecture
      : labels.architecture[file.architecture];

function fileLabel(file: ReleaseFile, labels: DownloadLabels) {
  if (file.platform === "macos") {
    return `${labels.macButton} ${architectureName(file, labels)} (.dmg)`;
  }
  if (file.platform === "windows") {
    const kind =
      file.format === "portable"
        ? labels.portableNoInstall
        : labels.formats.installer;
    const extension = file.format === "portable" ? ".zip" : ".exe";
    return `${kind} · ${architectureName(file, labels)} (${extension})`;
  }
  const packageName =
    file.format === "deb"
      ? labels.linuxDebButton
      : file.format === "rpm"
        ? labels.linuxRpmButton
        : labels.formats.tarball;
  const extension = file.format === "tarball" ? ".tar.gz" : `.${file.format}`;
  return `${packageName} · ${architectureName(file, labels)} (${extension})`;
}

function DownloadButton({
  file,
  label,
  highlighted,
  compact,
}: {
  file: ReleaseFile;
  label: string;
  highlighted: boolean;
  compact?: boolean;
}) {
  return (
    <a
      href={file.url}
      title={file.name}
      className={`flex h-[3.4rem] items-center justify-center rounded-lg border font-semibold text-white transition-colors ${
        compact ? "gap-2 whitespace-nowrap px-2.5 text-[0.9rem]" : "gap-2.5 px-4 text-base"
      } ${
        highlighted
          ? "border-transparent bg-ember-deep hover:bg-[#a63a07]"
          : "border-white/15 bg-white/[0.07] hover:bg-white/[0.13]"
      }`}
    >
      {label}
      <Download
        className={compact ? "size-4 shrink-0" : "size-[1.15rem] shrink-0"}
        aria-hidden
      />
    </a>
  );
}

const platformIcons = {
  windows: FaWindows,
  macos: FaApple,
  linux: FaLinux,
};

function OtherDownloads({
  title,
  files,
  labels,
}: {
  title: string;
  files: ReleaseFile[];
  labels: DownloadLabels;
}) {
  if (files.length === 0) return null;

  return (
    <div className="mt-auto pt-9">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
        {labels.otherDownloads}
      </p>
      <div className="relative mt-3">
        <select
          aria-label={`${labels.otherDownloads} for ${title}`}
          defaultValue=""
          onChange={(event) => {
            const url = event.currentTarget.value;
            event.currentTarget.value = "";
            if (url) window.location.assign(url);
          }}
          className="h-[3.4rem] w-full cursor-pointer appearance-none rounded-lg border border-white/15 bg-black/25 px-4 pr-11 text-base text-white hover:bg-black/35"
        >
          <option value="" className="bg-umber">
            {labels.selectPackage}
          </option>
          {files.map((file) => (
            <option key={file.name} value={file.url} className="bg-umber">
              {fileLabel(file, labels)}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-white/70"
          aria-hidden
        />
      </div>
    </div>
  );
}

export default function FlutterPainterDownloadCard({
  platform,
  title,
  note,
  detail,
  primaryFiles,
  otherFiles,
  recommended,
  labels,
}: {
  platform: DownloadPlatform;
  title: string;
  note: string;
  detail?: string;
  primaryFiles: ReleaseFile[];
  otherFiles: ReleaseFile[];
  recommended: boolean;
  labels: DownloadLabels;
}) {
  const PlatformIcon = platformIcons[platform];

  return (
    <article
      aria-label={`${title} downloads`}
      className={`flex min-w-0 flex-col rounded-2xl border p-7 transition-[border-color,box-shadow,background-color] duration-300 ${
        recommended
          ? "border-gold/70 bg-white/[0.07] shadow-[0_0_70px_-18px_rgba(196,138,53,0.6)]"
          : "border-white/10 bg-black/20"
      }`}
    >
      <div className="flex h-9 items-center justify-between gap-3">
        <h3 className="flex items-center gap-3.5 font-display text-2xl font-semibold">
          <PlatformIcon className="size-7" aria-hidden />
          {title}
        </h3>
        {recommended && (
          <span className="rounded-full bg-gold px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-umber">
            {labels.recommended}
          </span>
        )}
      </div>
      <div className="mt-10 flex flex-wrap gap-3 [&>a]:min-w-[8.5rem] [&>a]:flex-1">
        {primaryFiles.map((file) => (
          <DownloadButton
            key={file.name}
            file={file}
            label={
              platform === "windows"
                ? labels.windowsButton
                : platform === "macos"
                  ? `${labels.macButton} ${architectureName(file, labels)}`
                  : file.format === "deb"
                    ? labels.linuxDebButton
                    : labels.linuxRpmButton
            }
            highlighted={recommended}
            compact={platform === "linux"}
          />
        ))}
      </div>
      <p className="mt-4 text-[0.95rem] text-white/70">{note}</p>
      {detail && <p className="mt-1 text-sm text-white/60">{detail}</p>}
      <OtherDownloads title={title} files={otherFiles} labels={labels} />
    </article>
  );
}
