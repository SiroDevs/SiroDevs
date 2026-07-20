import HeroSection from "@/presentation/layout/biblelib/HeroSection";
import Features from "@/presentation/layout/biblelib/Features";
import BottomLinks from "@/presentation/layout/biblelib/BottomLinks";

export default function BibleLibHome() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <Features />
      <BottomLinks />
    </div>
  );
}
