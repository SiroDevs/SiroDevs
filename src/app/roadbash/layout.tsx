import type { Metadata } from "next";
import { site } from "@/config/site";
import { roadbashContent } from "@/infrastructure/content/roadbash/en";

export const metadata: Metadata = {
  title: roadbashContent.metadata.title,
  description: roadbashContent.metadata.description,
  keywords: [
    "RoadBash",
    "Road Bash",
    "online motorcycle racing game",
    "browser motorcycle game",
    "arcade racing game",
    "Kenyan racing game",
    "Flutter Flame game",
    "Road Rash inspired game",
  ],
  alternates: { canonical: "/roadbash" },
  openGraph: {
    title: roadbashContent.metadata.title,
    description: roadbashContent.metadata.description,
    url: `${site.url}/roadbash`,
    siteName: "RoadBash",
    images: [
      {
        url: roadbashContent.screenshots.items[0].image,
        alt: roadbashContent.screenshots.items[0].alt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: roadbashContent.metadata.title,
    description: roadbashContent.metadata.description,
    images: [roadbashContent.screenshots.items[0].image],
  },
  robots: { index: true, follow: true },
};

export default function RoadBashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
