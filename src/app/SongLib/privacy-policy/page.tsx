import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/songlib/app-info";
import { texts } from "@/infrastructure/content/songlib/privacy-texts";

export default function SongLibPrivacyPolicy() {
  return (
    <PrivacyPolicy
      info={info}
      texts={texts}
      backHref={`/${info.appName}`}
    />
  );
}
