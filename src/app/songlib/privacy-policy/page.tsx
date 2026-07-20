import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/songlib/app-info";
import { texts } from "@/infrastructure/content/songlib/privacy-texts";
import { theme } from "@/infrastructure/content/songlib/theme";

export default function SongLibPrivacyPolicy() {
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
