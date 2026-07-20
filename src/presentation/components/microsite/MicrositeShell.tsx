import Navbar from "@/presentation/components/navigation/Navbar";
import Footer from "@/presentation/components/navigation/Footer";
import ScrollToTop from "@/presentation/components/ui/ScrollToTop";

export default function MicrositeShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="main-page container-page py-5 sm:py-10">{children}</div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
