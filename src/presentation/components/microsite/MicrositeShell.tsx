import MicrositeHeader from "@/presentation/components/microsite/MicrositeHeader";
import MicrositeFooter from "@/presentation/components/microsite/MicrositeFooter";
import ScrollToTop from "@/presentation/components/ui/ScrollToTop";
import type { AppInfo } from "@/domain/entities/app-entity";

interface MicrositeShellProps {
  info: AppInfo;
  androidUrl: string;
  iosUrl?: string;
  githubUrl: string;
  showFork?: boolean;
  ctaGradient: string;
  children: React.ReactNode;
}

export default function MicrositeShell({
  info,
  androidUrl,
  iosUrl,
  githubUrl,
  showFork,
  ctaGradient,
  children,
}: MicrositeShellProps) {
  return (
    <div className="main-page">
      <MicrositeHeader
        info={info}
        androidUrl={androidUrl}
        iosUrl={iosUrl}
        ctaGradient={ctaGradient}
      />
      {children}
      <MicrositeFooter
        info={info}
        githubUrl={githubUrl}
        showFork={showFork}
        androidUrl={androidUrl}
        iosUrl={iosUrl}
      />
      <ScrollToTop />
    </div>
  );
}
