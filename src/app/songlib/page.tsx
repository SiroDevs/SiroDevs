import HeroSection from "@/presentation/layout/songlib/HeroSection";
import Features from "@/presentation/layout/songlib/Features";
import BottomLinks from "@/presentation/layout/songlib/BottomLinks";

export default function SongLibHome() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <Features />
      <BottomLinks />
    </div>
  );
}
