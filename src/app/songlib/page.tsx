import HeroSection from "@/presentation/components/songlib/HeroSection";
import Features from "@/presentation/components/songlib/Features";
import SongLibBottomLinks from "@/presentation/components/songlib/SongLibBottomLinks";

export default function SongLibHome() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <Features />
      <SongLibBottomLinks />
    </div>
  );
}
