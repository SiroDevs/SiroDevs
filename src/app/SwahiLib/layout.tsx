import type { Metadata } from "next";

import MicrositeShell from "@/presentation/components/microsite/MicrositeShell";
import { info } from "@/infrastructure/content/swahilib/app-info";

export const metadata: Metadata = {
  title: `${info.callout} — ${info.tagline}`,
  description: info.description,
  alternates: { canonical: "/swahilib" },
};

export default function SwahiLibLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MicrositeShell>{children}</MicrositeShell>;
}
