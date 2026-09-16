import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/swahilib/app-info";

export default function SwahiLibPrivacyPolicy() {
  return (
    <PrivacyPolicy info={info} />
  );
}
