"use client";

import { useEffect, useState } from "react";
import { MdDownload } from "react-icons/md";

import ThemeToggle from "@/presentation/theme/ThemeToggle";
import { useDevice } from "@/presentation/hooks/useDevice";
import { getInstallCta } from "@/presentation/lib/device";
import type { AppInfo } from "@/domain/entities/app-entity";

interface MicrositeHeaderProps {
  info: AppInfo;
  androidUrl: string;
  iosUrl?: string;
  ctaGradient: string;
}

export default function MicrositeHeader({
  info,
  androidUrl,
  iosUrl,
  ctaGradient,
}: MicrositeHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const device = useDevice();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cta = getInstallCta(device, info.appName, androidUrl, iosUrl);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-paper-line bg-paper/85 backdrop-blur-md dark:border-night-line dark:bg-night/85"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <a
          href="/#top"
          className="font-display text-lg font-semibold tracking-tight text-ink dark:text-cloud"
        >
          SIRO <span className="text-brand">DEVS</span>
        </a>
        <span className="font-display text-base font-semibold text-ink dark:text-cloud">
          {info.appName} <div className="hidden md:inline">- {info.tagline}</div>
        </span>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={cta ? cta.href : androidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${ctaGradient} px-4 py-2 text-xs font-semibold text-white no-underline shadow-sm transition-transform duration-200 hover:scale-[1.04] hover:text-white hover:no-underline active:scale-[0.97] sm:text-sm`}
          >
            <MdDownload size={14} />
            Install
          </a>
        </div>
      </div>
    </header>
  );
}
