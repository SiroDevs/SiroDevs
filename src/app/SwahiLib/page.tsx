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
        iosUrl={AppUrls.ios}
        texts={theme.heroTexts}
        heroImage={theme.heroImage}
        subheading={theme.heroSubheading}
        ctaGradient={theme.ctaGradient}
        ctaLabel={theme.ctaLabel}
        availabilityText={theme.availabilityText}
        noPlatformText={theme.noPlatformText}
      />
      <FeaturesGrid
        features={features}
        glowClassName={theme.glowClassName}
        iconColor={theme.iconColor}
        title="Kila Kitu Unachohitaji"
        subtitle="Kamusi kamili ya Kiswahili, michezo ya kujifunza, na uzoefu unaokufuata popote uendapo, hata bila mtandao."
      />
      <BottomLinks
        githubUrl={AppUrls.github}
        showFork={theme.showFork}
        privacyHref={`/${info.appName}/privacy-policy`}
      />
    </div>
  );
}
