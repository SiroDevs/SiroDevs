import type { Metadata } from "next";

import MicrositeShell from "@/presentation/components/microsite/MicrositeShell";
import { info } from "@/infrastructure/content/biblelib/app-info";
import { theme } from "@/infrastructure/content/biblelib/theme";
import { site } from "@/config/site";

const title = `${info.callout} — ${info.tagline}`;
const url = `${site.url}/BibleLib`;

export const metadata: Metadata = {
  title,
  description: info.description,
  keywords: [
    "BibleLib",
    "offline Bible app",
    "Bible study app",
    "multiple Bible translations app",
    "scripture reading app",
    "Bible bookmarks and notes",
    "offline scripture reader",
  ],
  alternates: { canonical: "/BibleLib" },
  openGraph: {
    title,
    description: info.description,
    url,
    siteName: info.appName,
    images: [{ url: theme.heroImage, width: 1200, height: 630, alt: title }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: info.description,
    images: [theme.heroImage],
  },
  robots: { index: true, follow: true },
};

export default function BibleLibLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MicrositeShell>{children}</MicrositeShell>;
}
