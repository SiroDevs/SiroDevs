import { flutterPainterContent } from "@/infrastructure/content/flutterpainter/en";
import { getFlutterPainterReleaseCatalog } from "@/infrastructure/github/flutterpainter-release";
import { site } from "@/config/site";
import FlutterPainterDownloadCards from "./FlutterPainterDownloadCards";

export default async function FlutterPainterDownloadSection() {
  const catalog = await getFlutterPainterReleaseCatalog();
  const content = flutterPainterContent.download;

  return (
    <section
      id="download"
      className="scroll-mt-20 bg-oxblood py-24 text-white lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/75">
            {content.description}
          </p>
        </div>
        <FlutterPainterDownloadCards catalog={catalog} labels={content.labels} />
        <p className="mt-6 text-center text-sm text-white/70">
          {content.labels.supportPrompt}{" "}
          <a
            className="underline underline-offset-4"
            href={`mailto:${site.email}`}
          >
            {content.labels.emailSupport}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
