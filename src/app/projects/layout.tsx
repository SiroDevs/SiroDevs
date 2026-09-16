import type { Metadata } from "next";

import { info } from "@/infrastructure/content/songlib/app-info";
import { theme } from "@/infrastructure/content/songlib/theme";
import { site } from "@/config/site";

const title = `Projects - Everything ${site.brand} works on`;
const description = "Every shipped app, revived portal, and long-running side project — from client work to apps I still maintain for fun, years later.";
const url = `${site.url}/projects`;
const ogImage = theme.heroImage ?? info.appIcon;

export const metadata: Metadata = {
  title,
  description: description,
  keywords: [
    "Siro Jackson",
    "SiroDevs",
    "Jack Siro",
    "Siro Jack",
    "Jackson Siro",
    "Software Developer Engineer Nairobi",
    "Flutter Developer Kenya",
    "Android Developer",
    "iOS Developer",
    "React Developer",
    "Kotlin",
    "Flutter",
    "iOS",
    "Swift",
    "React",
    "Mobile App Developer Kenya",
  ],
  alternates: { canonical: `/${info.slug}` },
  openGraph: {
    title,
    description: info.description,
    url,
    siteName: info.appName,
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    locale: "en_US",
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

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
