import type { Metadata } from "next";

import MicrositeShell from "@/presentation/components/microsite/MicrositeShell";
import { info } from "@/infrastructure/content/swahilib/app-info";
import { theme } from "@/infrastructure/content/swahilib/theme";
import { AppUrls } from "@/infrastructure/content/swahilib/app-urls";
import { site } from "@/config/site";

const title = `${info.callout} — ${info.tagline}`;
const url = `${site.url}/${info.slug}`;
const ogImage = theme.heroImage ?? info.appIcon;

export const metadata: Metadata = {
  title,
  description: info.description,
  keywords: [
    "SwahiLib",
    "Kamusi ya Kiswahili",
    "Swahili dictionary app",
    "Kiswahili Kitukuzwe",
    "offline Swahili dictionary",
    "Swahili idioms nahau",
    "Swahili proverbs methali",
    "Swahili sayings misemo",
  ],
  alternates: { canonical: `/${info.slug}` },
  openGraph: {
    title,
    description: info.description,
    url,
    siteName: info.appName,
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    locale: "sw_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: info.description,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export default function SwahiLibLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MicrositeShell
      info={info}
      androidUrl={AppUrls.android}
      iosUrl={AppUrls.ios}
      githubUrl={AppUrls.github}
      showFork={theme.showFork}
      ctaGradient={theme.ctaGradient}
    >
      {children}
    </MicrositeShell>
  );
}
