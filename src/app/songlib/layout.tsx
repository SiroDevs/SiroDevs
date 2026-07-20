import type { Metadata } from "next";

import MicrositeShell from "@/presentation/components/microsite/MicrositeShell";
import { info } from "@/infrastructure/content/songlib/app-info";

export const metadata: Metadata = {
  title: `${info.callout} — ${info.tagline}`,
  description: info.description,
  alternates: { canonical: "/songlib" },
};

export default function SongLibLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MicrositeShell>{children}</MicrositeShell>;
}
