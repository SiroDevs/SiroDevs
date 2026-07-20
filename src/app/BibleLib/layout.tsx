import type { Metadata } from "next";

import MicrositeShell from "@/presentation/components/microsite/MicrositeShell";
import { info } from "@/infrastructure/content/biblelib/app-info";

export const metadata: Metadata = {
  title: `${info.callout} — ${info.tagline}`,
  description: info.description,
  alternates: { canonical: "/biblelib" },
};

export default function BibleLibLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MicrositeShell>{children}</MicrositeShell>;
}
