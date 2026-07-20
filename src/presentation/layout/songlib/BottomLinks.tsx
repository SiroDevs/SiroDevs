import Link from "next/link";
import { Star } from "lucide-react";

import { AppUrls } from "@/infrastructure/content/songlib/app-urls";
import { info } from "@/infrastructure/content/songlib/app-info";

export default function BottomLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 border-t border-paper-line dark:border-night-line py-10 font-mono text-sm">
      <a
        href={AppUrls.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-ink-soft dark:text-cloud-soft transition-colors hover:text-brand"
      >
        <Star size={15} />
        Star
      </a>
      <Link
        href={`/${info.appName}/privacy-policy`}
        className="text-ink-soft dark:text-cloud-soft transition-colors hover:text-brand"
      >
        Privacy Policy
      </Link>
    </div>
  );
}
