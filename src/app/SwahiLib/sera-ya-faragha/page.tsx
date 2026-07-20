import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/swahilib/app-info";
import { texts } from "@/infrastructure/content/swahilib/privacy-texts";
import { theme } from "@/infrastructure/content/swahilib/theme";

export default function SwahiLibPrivacyPolicy() {
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
