import { flutterPainterContent } from "@/infrastructure/content/flutterpainter/en";
import { getFlutterPainterReleaseCatalog } from "@/infrastructure/github/flutterpainter-release";
import FlutterPainterDownloadCards from "./FlutterPainterDownloadCards";

export default async function FlutterPainterDownloadSection() {
  const catalog = await getFlutterPainterReleaseCatalog();
  const content = flutterPainterContent.download;

  return (
    <section id="download" className="scroll-mt-24 bg-night py-16 text-cloud sm:py-20">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-3 leading-relaxed text-cloud-soft">{content.description}</p>
        </div>
        <FlutterPainterDownloadCards catalog={catalog} labels={content.labels} />
      </div>
    </section>
  );
}
