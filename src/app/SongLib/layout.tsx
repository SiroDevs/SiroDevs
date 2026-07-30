import type { Metadata } from "next";

import MicrositeShell from "@/presentation/components/microsite/MicrositeShell";
import { info } from "@/infrastructure/content/songlib/app-info";
import { theme } from "@/infrastructure/content/songlib/theme";
import { site } from "@/config/site";

const title = `${info.callout} — ${info.tagline}`;
const url = `${site.url}/SongLib`;

export const metadata: Metadata = {
  title,
  description: info.description,
  keywords: [
    "SongLib",
    "vSongBook",
    "Songs of Worship",
    "Nyimbo za Injili",
    "Believers Songbook",
    "Virtual songbook",
    "Jack Siro",
  ],
  alternates: { canonical: "/SongLib" },
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

export default function SongLibLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MicrositeShell>{children}</MicrositeShell>;
}
