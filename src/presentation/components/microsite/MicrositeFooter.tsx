import Image from "next/image";
import Link from "next/link";
import { GitFork } from "lucide-react";

import type { AppInfo } from "@/domain/entities/app-entity";

interface MicrositeFooterProps {
  info: AppInfo;
  githubUrl: string;
  showFork?: boolean;
  androidUrl: string;
  iosUrl?: string;
}

export default function MicrositeFooter({
  info,
  githubUrl,
  showFork = true,
}: MicrositeFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper-line dark:border-night-line">
      <div className="container-page flex flex-col items-center gap-8 py-10 sm:py-12">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-xs text-ink-soft dark:text-cloud-soft sm:text-sm">
          {showFork && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 no-underline hover:text-brand hover:no-underline"
            >
              <GitFork size={14} />
              Source code on Github
            </a>
          )}
          <Link
            href={`/${info.slug}/privacy-policy`}
            className="no-underline hover:text-brand hover:no-underline"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          <Image
            src={info.appIcon}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 rounded-md object-cover"
          />
          <p className="font-mono text-xs text-ink-faint dark:text-cloud-soft">
            © {year} {info.appName} · Built by{" "}
            <a href="/" className="text-ink-soft no-underline hover:text-brand hover:no-underline dark:text-cloud-soft">
              Siro Jackson
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
