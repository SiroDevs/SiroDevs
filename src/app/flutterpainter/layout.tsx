import type { Metadata } from "next";
import { site } from "@/config/site";
import { flutterPainterContent } from "@/infrastructure/content/flutterpainter/en";

export const metadata: Metadata = {
  title: flutterPainterContent.metadata.title,
  description: flutterPainterContent.metadata.description,
  keywords: [
    "FlutterPainter",
    "Flutter drawing app",
    "vector drawing app",
    "Flutter custom painter",
    "Dart painter generator",
    "desktop vector editor",
    "Dart code export",
    "drawing software for Flutter",
  ],
  alternates: { canonical: "/flutterpainter" },
  openGraph: {
    title: flutterPainterContent.metadata.title,
    description: flutterPainterContent.metadata.description,
    url: `${site.url}/flutterpainter`,
    siteName: "FlutterPainter",
    images: [
      {
        url: "/flutterpainter/editor.png",
        alt: "FlutterPainter vector drawing workspace with shapes, layers, and canvas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: flutterPainterContent.metadata.title,
    description: flutterPainterContent.metadata.description,
    images: ["/flutterpainter/editor.png"],
  },
  robots: { index: true, follow: true },
};

export default function FlutterPainterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
