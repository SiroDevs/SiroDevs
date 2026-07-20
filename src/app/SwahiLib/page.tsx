import HeroSection from "@/presentation/layout/swahilib/HeroSection";
import Features from "@/presentation/layout/swahilib/Features";
import BottomLinks from "@/presentation/layout/swahilib/BottomLinks";

export default function SwahiLibHome() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <Features />
      <BottomLinks />
    </div>
  );
}
