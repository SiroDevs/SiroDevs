import HeroSection from "@/presentation/components/microsite/HeroSection";
import CtaBanner from "@/presentation/components/microsite/CtaBanner";
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
        iosUrl={AppUrls.ios}
        texts={theme.heroTexts}
        heroImage={theme.heroImage}
        ctaGradient={theme.ctaGradient}
        accent={theme.accent}
        availabilityText={theme.availabilityText}
      />
      <Features />
      <CtaBanner
        info={info}
        androidUrl={AppUrls.android}
        iosUrl={AppUrls.ios}
        ctaGradient={theme.ctaGradient}
      />
    </div>
  );
}
