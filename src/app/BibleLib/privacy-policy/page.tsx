import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/biblelib/app-info";

export default function BibleLibPrivacyPolicy() {
  return <PrivacyPolicy info={info} />;
}
