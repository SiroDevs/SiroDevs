import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/youplot/app-info";
import { texts } from "@/infrastructure/content/youplot/privacy-texts";
import { theme } from "@/infrastructure/content/youplot/theme";

export default function YouPlotPrivacyPolicy() {
  return (
    <PrivacyPolicy
      info={info}
      texts={texts}
      backHref={`/${info.appName}`}
      backLabel={theme.privacyBackLabel}
      title={theme.privacyLabel}
      subtitlePrefix={theme.privacySubtitlePrefix}
    />
  );
}
