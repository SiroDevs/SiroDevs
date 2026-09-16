import HeroSection from "@/presentation/components/microsite/HeroSection";
import FeaturesGrid from "@/presentation/components/microsite/FeaturesGrid";
import CtaBanner from "@/presentation/components/microsite/CtaBanner";

import { info } from "@/infrastructure/content/youplot/app-info";
import { AppUrls } from "@/infrastructure/content/youplot/app-urls";
import { features } from "@/infrastructure/content/youplot/features";
import { theme } from "@/infrastructure/content/youplot/theme";

export default function YouPlotHome() {
  return (
    <div suppressHydrationWarning>
      <HeroSection
        info={info}
        androidUrl={AppUrls.android}
        texts={theme.heroTexts}
        heroImage={theme.heroImage}
        ctaGradient={theme.ctaGradient}
        accent={theme.accent}
        availabilityText={theme.availabilityText}
      />
      <FeaturesGrid
        features={features}
        glowClassName={theme.glowClassName}
        iconColor={theme.iconColor}
        eyebrow="Why YouPlot"
        title="Plan It, Plot It, Live It"
        subtitle="Map your adventure and stay on schedule out there."
      />
      <CtaBanner
        info={info}
        androidUrl={AppUrls.android}
        ctaGradient={theme.ctaGradient}
      />
    </div>
  );
}
