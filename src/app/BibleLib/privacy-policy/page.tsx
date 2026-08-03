import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/biblelib/app-info";
import { texts } from "@/infrastructure/content/biblelib/privacy-texts";

export default function BibleLibPrivacyPolicy() {
  return (
    <PrivacyPolicy
      info={info}
      texts={texts}
      backHref={`/${info.appName}`}
    />
  );
}
