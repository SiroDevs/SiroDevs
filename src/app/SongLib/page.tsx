import HeroSection from "@/presentation/components/microsite/HeroSection";
import BottomLinks from "@/presentation/components/microsite/BottomLinks";
import Features from "@/presentation/layout/songlib/Features";

import { info } from "@/infrastructure/content/songlib/app-info";
import { AppUrls } from "@/infrastructure/content/songlib/app-urls";
import { theme } from "@/infrastructure/content/songlib/theme";

export default function SongLibHome() {
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
      <Features />
      <BottomLinks
        githubUrl={AppUrls.github}
        showFork={theme.showFork}
        privacyHref={`/${info.appName}/${theme.privacyPath}`}
        privacyLabel={theme.privacyLabel}
      />
    </div>
  );
}
