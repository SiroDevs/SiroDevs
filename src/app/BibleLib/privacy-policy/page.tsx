import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/biblelib/app-info";

export default function BiblelibPrivacyPolicy() {
  return <PrivacyPolicy info={info} />;
}
