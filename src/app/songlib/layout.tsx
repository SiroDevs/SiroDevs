import type { Metadata } from "next";
import Navbar from "@/presentation/components/layout/Navbar";
import Footer from "@/presentation/components/layout/Footer";
import ScrollToTop from "@/presentation/components/ui/ScrollToTop";
import { info } from "@/infrastructure/content/songlib/app-info";
import "./songlib.scss";

export const metadata: Metadata = {
  title: `${info.callout} — ${info.tagline}`,
  description: info.description,
  alternates: { canonical: "/songlib" },
};

/**
 * Shell for the whole /songlib subtree. It's a regular nested route in this
 * app now — same build, same deploy, same engine, same nav, same theme,
 * same footer — not a separately hosted site or an <iframe>.
 *
 * SongLib follows the portfolio's own light/dark theme everywhere except
 * its buttons and cards (the CTA button, GlowCard, BookCard), which keep
 * their original orange treatment by design.
 */
export default function SongLibLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="songlib-page container-page py-5 sm:py-10">
        {children}
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
