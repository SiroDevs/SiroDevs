import Navbar from "@/presentation/components/navigation/Navbar";
import Footer from "@/presentation/components/navigation/Footer";
import ScrollToTop from "@/presentation/components/ui/ScrollToTop";

export default function ProjectLandingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
