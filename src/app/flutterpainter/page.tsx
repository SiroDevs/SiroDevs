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
import { SiFlutter } from "react-icons/si";

export default function FlutterPainterPage() {
  const content = flutterPainterContent;

  return (
    <ProjectLandingShell navigation={content.navigation} accent="flutter">
      <ProjectHero
        {...content.hero}
        accent="flutter"
        brandIcon={<SiFlutter className="size-9" aria-hidden />}
      />
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
        accent="flutter"
      />
      <ProjectSteps
        id="workflow"
        title={content.workflow.title}
        description={content.workflow.description}
        steps={content.workflow.steps}
        accent="flutter"
      />
      <ProjectFaq
        id="faq"
        title={content.faq.title}
        description={content.faq.description}
        items={content.faq.items}
        accent="flutter"
      />
      <Suspense fallback={<FlutterPainterDownloadSkeleton />}>
        <FlutterPainterDownloadSection />
      </Suspense>
    </ProjectLandingShell>
  );
}
