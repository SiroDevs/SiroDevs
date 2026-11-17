import ProjectBottomCta from "@/presentation/components/projects/ProjectBottomCta";
import ProjectFeatureGrid from "@/presentation/components/projects/ProjectFeatureGrid";
import ProjectHero from "@/presentation/components/projects/ProjectHero";
import ProjectLandingShell from "@/presentation/components/projects/ProjectLandingShell";
import ProjectScreenshotGallery from "@/presentation/components/projects/ProjectScreenshotGallery";
import { roadbashContent } from "@/infrastructure/content/roadbash/en";

export default function RoadBashPage() {
  const content = roadbashContent;

  return (
    <ProjectLandingShell>
      <ProjectHero {...content.hero} />
      <ProjectScreenshotGallery
        id="screenshots"
        title={content.screenshots.title}
        description={content.screenshots.description}
        screenshots={content.screenshots.items}
      />
      <ProjectFeatureGrid
        id="features"
        eyebrow={content.features.eyebrow}
        title={content.features.title}
        description={content.features.description}
        features={content.features.items}
      />
      <ProjectFeatureGrid
        id="controls"
        title={content.controls.title}
        description={content.controls.description}
        features={content.controls.items}
      />
      <ProjectBottomCta
        title={content.closing.title}
        description={content.closing.description}
        label={content.closing.label}
        href={content.closing.href}
        external
      />
    </ProjectLandingShell>
  );
}
