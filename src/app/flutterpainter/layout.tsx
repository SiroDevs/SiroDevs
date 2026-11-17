import type { Metadata } from "next";
import { site } from "@/config/site";
import { flutterPainterContent } from "@/infrastructure/content/flutterpainter/en";

export const metadata: Metadata = {
  title: flutterPainterContent.metadata.title,
  description: flutterPainterContent.metadata.description,
  alternates: { canonical: "/flutterpainter" },
  openGraph: {
    title: flutterPainterContent.metadata.title,
    description: flutterPainterContent.metadata.description,
    url: `${site.url}/flutterpainter`,
    siteName: site.name,
    images: [
      {
        url: "/flutterpainter/editor.png",
        alt: "FlutterPainter drawing workspace",
      },
    ],
    type: "website",
  },
};

export default function FlutterPainterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
