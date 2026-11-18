import type { Metadata } from "next";
import { site } from "@/config/site";
import ProjectBottomCta from "@/presentation/components/projects/ProjectBottomCta";
import ProjectFaq from "@/presentation/components/projects/ProjectFaq";
import ProjectHero from "@/presentation/components/projects/ProjectHero";
import ProjectLandingShell from "@/presentation/components/projects/ProjectLandingShell";
import ProjectSteps from "@/presentation/components/projects/ProjectSteps";
import { flutterPainterContent } from "@/infrastructure/content/flutterpainter/en";
import { flutterPainterHowItWorksContent } from "@/infrastructure/content/flutterpainter/how-it-works";

const pageTitle = "How FlutterPainter Works | SiroDevs";
const pageDescription =
  "Learn how to draw and organize artwork, create a 3D object from shapes, and export a FlutterPainter Dart painter.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/flutterpainter/how-it-works" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: site.url + "/flutterpainter/how-it-works",
    siteName: "FlutterPainter",
    images: ["/flutterpainter/editor.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/flutterpainter/editor.png"],
  },
};

export default function FlutterPainterHowItWorksPage() {
  const content = flutterPainterHowItWorksContent;

  return (
    <ProjectLandingShell navigation={flutterPainterContent.navigation} accent="flutter">
      <ProjectHero {...content.hero} accent="flutter" />
      <ProjectSteps
        id="workflow"
        title={content.workflow.title}
        description={content.workflow.description}
        steps={content.workflow.steps}
        accent="flutter"
      />
      <ProjectSteps
        id="create-3d"
        title={content.threeD.title}
        description={content.threeD.description}
        steps={content.threeD.steps}
        accent="flutter"
      />
      <ProjectFaq
        id="faq"
        title={content.faq.title}
        description={content.faq.description}
        items={content.faq.items}
        accent="flutter"
      />
      <ProjectBottomCta {...content.closing} />
    </ProjectLandingShell>
  );
}
