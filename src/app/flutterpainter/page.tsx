import { Suspense } from "react";
import ProjectFeatureGrid from "@/presentation/components/projects/ProjectFeatureGrid";
import FlutterPainterDownloadSection from "@/presentation/components/projects/FlutterPainterDownloadSection";
import FlutterPainterDownloadSkeleton from "@/presentation/components/projects/FlutterPainterDownloadSkeleton";
import ProjectFaq from "@/presentation/components/projects/ProjectFaq";
import ProjectHero from "@/presentation/components/projects/ProjectHero";
import ProjectLandingShell from "@/presentation/components/projects/ProjectLandingShell";
import ProjectScreenshotGallery from "@/presentation/components/projects/ProjectScreenshotGallery";
import ProjectSteps from "@/presentation/components/projects/ProjectSteps";
import { flutterPainterContent } from "@/infrastructure/content/flutterpainter/en";

export default function FlutterPainterPage() {
  const content = flutterPainterContent;

  return (
    <ProjectLandingShell navigation={content.navigation}>
      <ProjectHero {...content.hero} />
      <ProjectScreenshotGallery
        id="screenshots"
        title={content.screenshots.title}
        description={content.screenshots.description}
        screenshots={content.screenshots.items}
      />
      <ProjectFeatureGrid
        id="features"
        title={content.features.title}
        description={content.features.description}
        features={content.features.items}
      />
      <ProjectSteps
        id="workflow"
        title={content.workflow.title}
        description={content.workflow.description}
        steps={content.workflow.steps}
      />
      <ProjectFaq
        id="faq"
        title={content.faq.title}
        description={content.faq.description}
        items={content.faq.items}
      />
      <Suspense fallback={<FlutterPainterDownloadSkeleton />}>
        <FlutterPainterDownloadSection />
      </Suspense>
    </ProjectLandingShell>
  );
}
