import Link from "next/link";
import { Star, GitFork } from "lucide-react";

import { AppUrls } from "@/infrastructure/content/songlib/app-urls";

/**
 * The GitHub star/fork actions plus the privacy-policy link, centered at
 * the bottom of the SongLib home page — styled like the rest of the site
 * rather than SongLib's old dedicated footer bar.
 */
export default function SongLibBottomLinks() {
  const forkUrl = `${AppUrls.github}/fork`;

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
      <a
        href={forkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-ink-soft dark:text-cloud-soft transition-colors hover:text-brand"
      >
        <GitFork size={15} />
        Fork
      </a>
      <Link
        href="/songlib/privacy-policy"
        className="text-ink-soft dark:text-cloud-soft transition-colors hover:text-brand"
      >
        Privacy Policy
      </Link>
    </div>
  );
}
