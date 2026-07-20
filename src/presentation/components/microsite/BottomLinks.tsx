import Link from "next/link";
import { Star, GitFork } from "lucide-react";

interface BottomLinksProps {
  githubUrl: string;
  showFork?: boolean;
  privacyHref: string;
  privacyLabel: string;
}

export default function BottomLinks({
  githubUrl,
  showFork = true,
  privacyHref,
  privacyLabel,
}: BottomLinksProps) {
  const forkUrl = `${githubUrl}/fork`;

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 border-t border-paper-line dark:border-night-line py-10 font-mono text-sm">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-ink-soft dark:text-cloud-soft transition-colors hover:text-brand"
      >
        <Star size={15} />
        Star
      </a>
      {showFork && (
        <a
          href={forkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-ink-soft dark:text-cloud-soft transition-colors hover:text-brand"
        >
          <GitFork size={15} />
          Fork
        </a>
      )}
      <Link
        href={privacyHref}
        className="text-ink-soft dark:text-cloud-soft transition-colors hover:text-brand"
      >
        {privacyLabel}
      </Link>
    </div>
  );
}
