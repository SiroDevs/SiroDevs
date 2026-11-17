import { ExternalLink } from "lucide-react";
import type { ReleaseCatalog } from "@/domain/entities/download";
import type { DownloadLabels } from "./FlutterPainterDownloadCard";

export default function FlutterPainterReleaseLinks({
  catalog,
  labels,
}: {
  catalog: ReleaseCatalog;
  labels: DownloadLabels;
}) {
  return (
    <p className="mt-9 text-center text-sm text-white/60">
      {catalog.version && (
        <>
          {labels.version} <b className="font-semibold text-white/85">{catalog.version}</b> ·{" "}
        </>
      )}
      <a
        className="underline underline-offset-4 hover:text-white"
        href={catalog.releaseUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {labels.releaseNotes}
        <ExternalLink className="mb-0.5 ml-1 inline size-3.5" aria-hidden />
      </a>
      {catalog.checksumsUrl && (
        <>
          {" "}·{" "}
          <a
            className="underline underline-offset-4 hover:text-white"
            href={catalog.checksumsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels.checksums}
          </a>
        </>
      )}
    </p>
  );
}
