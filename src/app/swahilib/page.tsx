import HeroSection from "@/presentation/components/microsite/HeroSection";
import FeaturesGrid from "@/presentation/components/microsite/FeaturesGrid";
import CtaBanner from "@/presentation/components/microsite/CtaBanner";

import { info } from "@/infrastructure/content/swahilib/app-info";
import { AppUrls } from "@/infrastructure/content/swahilib/app-urls";
import { features } from "@/infrastructure/content/swahilib/features";
import { theme } from "@/infrastructure/content/swahilib/theme";

export default function SwahiLibHome() {
  return (
    <div suppressHydrationWarning>
      <HeroSection
        info={info}
        androidUrl={AppUrls.android}
        iosUrl={AppUrls.ios}
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
        eyebrow="Why SwahiLib"
        title="Everything You Need"
        subtitle="A complete Swahili dictionary, learning games, and offline access."
      />
      <CtaBanner
        info={info}
        androidUrl={AppUrls.android}
        iosUrl={AppUrls.ios}
        ctaGradient={theme.ctaGradient}
      />
    </div>
  );
}
