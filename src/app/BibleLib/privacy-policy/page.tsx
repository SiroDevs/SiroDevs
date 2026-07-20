import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/biblelib/app-info";
import { texts } from "@/infrastructure/content/biblelib/privacy-texts";
import { theme } from "@/infrastructure/content/biblelib/theme";

export default function BibleLibPrivacyPolicy() {
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
