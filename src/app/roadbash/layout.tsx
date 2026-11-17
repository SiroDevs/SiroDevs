import type { Metadata } from "next";
import { site } from "@/config/site";
import { roadbashContent } from "@/infrastructure/content/roadbash/en";

export const metadata: Metadata = {
  title: roadbashContent.metadata.title,
  description: roadbashContent.metadata.description,
  alternates: { canonical: "/roadbash" },
  openGraph: {
    title: roadbashContent.metadata.title,
    description: roadbashContent.metadata.description,
    url: `${site.url}/roadbash`,
    siteName: site.name,
    images: [{ url: roadbashContent.hero.image, alt: roadbashContent.hero.imageAlt }],
    type: "website",
  },
};

export default function RoadBashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
