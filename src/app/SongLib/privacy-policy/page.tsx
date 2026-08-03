import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/songlib/app-info";

export default function SongLibPrivacyPolicy() {
  return <PrivacyPolicy info={info} />;
}
