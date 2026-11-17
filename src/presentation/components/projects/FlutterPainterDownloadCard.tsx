"use client";

import { Download } from "lucide-react";
import type {
  DownloadArchitecture,
  DownloadFormat,
  ReleaseFile,
} from "@/domain/entities/download";

export interface DownloadLabels {
  recommended: string;
  otherDownloads: string;
  selectPackage: string;
  windowsTitle: string;
  windowsDescription: string;
  macosTitle: string;
  macosDescription: string;
  appleSilicon: string;
  intelMac: string;
  linuxTitle: string;
  linuxDescription: string;
  formats: Record<DownloadFormat, string>;
  architecture: Record<DownloadArchitecture, string>;
  releaseNotes: string;
  checksums: string;
  version: string;
}

function fileLabel(file: ReleaseFile, labels: DownloadLabels) {
  const platformName =
    file.platform === "macos"
      ? file.architecture === "arm64"
        ? labels.appleSilicon
        : labels.intelMac
      : labels.architecture[file.architecture];
  return `${labels.formats[file.format]} · ${platformName}`;
}

function DownloadLink({
  file,
  label,
}: {
  file: ReleaseFile;
  label: string;
}) {
  return (
    <a
      href={file.url}
      title={file.name}
      className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-center text-sm font-semibold text-cloud transition-colors hover:border-brand hover:bg-white/5"
    >
      {label}
      <Download size={16} aria-hidden />
    </a>
  );
}

export default function FlutterPainterDownloadCard({
  title,
  description,
  files,
  primaryFiles,
  recommended,
  labels,
}: {
  title: string;
  description: string;
  files: ReleaseFile[];
  primaryFiles: ReleaseFile[];
  recommended: boolean;
  labels: DownloadLabels;
}) {
  const otherFiles = files.filter((file) => !primaryFiles.includes(file));

  return (
    <article
      aria-label={`${title} downloads`}
      className={`flex min-w-0 flex-col rounded-2xl border p-6 ${
        recommended
          ? "border-brand/70 bg-white/[0.06]"
          : "border-white/15 bg-black/15"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-cloud">{title}</h3>
          <p className="mt-2 min-h-12 text-sm leading-relaxed text-cloud-soft">
            {description}
          </p>
        </div>
        {recommended && (
          <span className="shrink-0 rounded-full border border-brand/50 px-2.5 py-1 text-xs text-cloud">
            {labels.recommended}
          </span>
        )}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {primaryFiles.map((file) => (
          <DownloadLink
            key={file.name}
            file={file}
            label={fileLabel(file, labels)}
          />
        ))}
      </div>
      {otherFiles.length > 0 && (
        <label className="mt-auto block pt-7 text-sm text-cloud-soft">
          <span className="mb-2 block">{labels.otherDownloads}</span>
          <select
            aria-label={`${labels.otherDownloads} for ${title}`}
            defaultValue=""
            onChange={(event) => {
              const url = event.currentTarget.value;
              event.currentTarget.value = "";
              if (url) window.location.assign(url);
            }}
            className="h-12 w-full rounded-lg border border-white/20 bg-night px-3 text-cloud"
          >
            <option value="">{labels.selectPackage}</option>
            {otherFiles.map((file) => (
              <option key={file.name} value={file.url}>
                {fileLabel(file, labels)}
              </option>
            ))}
          </select>
        </label>
      )}
    </article>
  );
}
