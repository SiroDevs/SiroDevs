import type { Metadata } from "next";
import Navbar from "@/presentation/components/navigation/Navbar";
import Footer from "@/presentation/components/navigation/Footer";
import ScrollToTop from "@/presentation/components/ui/ScrollToTop";
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
  return (
    <>
      <Navbar />
      <div className="main-page container-page py-5 sm:py-10">
        {children}
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
