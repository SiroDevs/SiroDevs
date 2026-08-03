import PrivacyPolicy from "@/presentation/components/microsite/PrivacyPolicy";

import { info } from "@/infrastructure/content/youplot/app-info";
import { texts } from "@/infrastructure/content/youplot/privacy-texts";

export default function YouPlotPrivacyPolicy() {
  return (
    <PrivacyPolicy
      info={info}
      texts={texts}
      backHref={`/${info.appName}`}
    />
  );
}
