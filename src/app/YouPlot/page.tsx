import HeroSection from "@/presentation/components/microsite/HeroSection";
import FeaturesGrid from "@/presentation/components/microsite/FeaturesGrid";
import BottomLinks from "@/presentation/components/microsite/BottomLinks";

import { info } from "@/infrastructure/content/youplot/app-info";
import { AppUrls } from "@/infrastructure/content/youplot/app-urls";
import { features } from "@/infrastructure/content/youplot/features";
import { theme } from "@/infrastructure/content/youplot/theme";

export default function YouplotHome() {
  return (
    <div suppressHydrationWarning>
      <HeroSection
        info={info}
        androidUrl={AppUrls.android}
        texts={theme.heroTexts}
        iconImage={info.appIcon}
        heroImage={theme.heroImage}
        subheading={theme.heroSubheading}
        ctaGradient={theme.ctaGradient}
        availabilityText={theme.availabilityText}
      />
      <FeaturesGrid
        features={features}
        glowClassName={theme.glowClassName}
        iconColor={theme.iconColor}
        title="Plan It, Plot It, Live It"
        subtitle="Map your adventure and stay on schedule out there."
      />
      <BottomLinks
        githubUrl={AppUrls.github}
        showFork={theme.showFork}
        privacyHref={`/${info.slug}/privacy-policy`}
      />
    </div>
  );
}
