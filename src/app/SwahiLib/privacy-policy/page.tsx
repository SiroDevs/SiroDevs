import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/swahilib/app-info";
import { texts } from "@/infrastructure/content/swahilib/privacy-texts";

export default function SwahiLibPrivacyPolicy() {
  return (
    <PrivacyPolicy
      info={info}
      texts={texts}
      backHref={`/${info.appName}`}
    />
  );
}
