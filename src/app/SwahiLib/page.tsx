import HeroSection from "@/presentation/components/microsite/HeroSection";
import FeaturesGrid from "@/presentation/components/microsite/FeaturesGrid";
import BottomLinks from "@/presentation/components/microsite/BottomLinks";

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
        texts={theme.heroTexts}
        heroImage={theme.heroImage}
        subheading={theme.heroSubheading}
        ctaGradient={theme.ctaGradient}
        ctaLabel={theme.ctaLabel}
        availabilityText={theme.availabilityText}
      />
      <FeaturesGrid
        features={features}
        glowClassName={theme.glowClassName}
        iconColor={theme.iconColor}
      />
      <BottomLinks
        githubUrl={AppUrls.github}
        showFork={theme.showFork}
        privacyHref={`/${info.appName}/${theme.privacyPath}`}
        privacyLabel={theme.privacyLabel}
      />
    </div>
  );
}
