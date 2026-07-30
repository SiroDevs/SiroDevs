import type { Metadata } from "next";

import MicrositeShell from "@/presentation/components/microsite/MicrositeShell";
import { info } from "@/infrastructure/content/youplot/app-info";
import { theme } from "@/infrastructure/content/youplot/theme";
import { site } from "@/config/site";

const title = `${info.callout} — ${info.tagline}`;
const url = `${site.url}/YouPlot`;

export const metadata: Metadata = {
  title,
  description: info.description,
  keywords: [
    "YouPlot",
    "outdoor route planner",
    "hiking route planner app",
    "running route planner",
    "cycling route app",
    "GPS activity tracker",
    "adventure planning app",
  ],
  alternates: { canonical: "/YouPlot" },
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

export default function YouPlotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MicrositeShell>{children}</MicrositeShell>;
}
