import HeroSection from "@/presentation/layout/youplot/HeroSection";
import Features from "@/presentation/layout/youplot/Features";
import BottomLinks from "@/presentation/layout/youplot/BottomLinks";

export default function YouPlotHome() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <Features />
      <BottomLinks />
    </div>
  );
}
