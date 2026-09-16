import HeroSection from "@/presentation/components/microsite/HeroSection";
import FeaturesGrid from "@/presentation/components/microsite/FeaturesGrid";
import CtaBanner from "@/presentation/components/microsite/CtaBanner";

import { info } from "@/infrastructure/content/biblelib/app-info";
import { AppUrls } from "@/infrastructure/content/biblelib/app-urls";
import { features } from "@/infrastructure/content/biblelib/features";
import { theme } from "@/infrastructure/content/biblelib/theme";

export default function BibleLibHome() {
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
        eyebrow="Why BibleLib"
        title="Built for Focused Study"
        subtitle="Multiple translations, instant search, and offline reading."
      />
      <CtaBanner
        info={info}
        androidUrl={AppUrls.android}
        ctaGradient={theme.ctaGradient}
      />
    </div>
  );
}
