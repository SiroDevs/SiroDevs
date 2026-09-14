import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/songlib/app-info";

export default function SonglibPrivacyPolicy() {
  return <PrivacyPolicy info={info} />;
}
