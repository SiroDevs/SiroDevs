import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/youplot/app-info";

export default function YouPlotPrivacyPolicy() {
  return <PrivacyPolicy info={info} />;
}
