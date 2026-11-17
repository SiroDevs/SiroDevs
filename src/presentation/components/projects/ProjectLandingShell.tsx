import Navbar from "@/presentation/components/navigation/Navbar";
import Footer from "@/presentation/components/navigation/Footer";
import ScrollToTop from "@/presentation/components/ui/ScrollToTop";
import ThemeToggle from "@/presentation/theme/ThemeToggle";
import { projectAccentStyles, type ProjectAccent } from "./project-accent";

interface ProjectLandingNavigation {
  links: Array<{ href: string; label: string }>;
  action: { href: string; label: string; external?: boolean };
}

export default function ProjectLandingShell({
  children,
  navigation,
  accent = "brand",
}: {
  children: React.ReactNode;
  navigation?: ProjectLandingNavigation;
  accent?: ProjectAccent;
}) {
  const accentStyles = projectAccentStyles[accent];

  return (
    <>
      {navigation ? (
        <header className="sticky top-0 z-50 border-b border-paper-line bg-paper/95 dark:border-night-line dark:bg-night/95">
          <nav className="container-page flex h-16 items-center justify-between gap-4">
            <a
              href="/#top"
              className="shrink-0 font-display text-lg font-semibold tracking-tight text-ink dark:text-cloud"
            >
              SIRO <span className="text-brand">DEVS</span>
            </a>
            <div className="hidden items-center gap-7 md:flex">
              {navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-sm text-ink-soft transition-colors dark:text-cloud-soft ${accentStyles.hoverText}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <ThemeToggle />
              <a
                href={navigation.action.href}
                {...(navigation.action.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className={`rounded-lg px-3 py-2 font-mono text-xs font-semibold text-white transition-colors sm:px-4 sm:text-sm ${accentStyles.action}`}
              >
                {navigation.action.label}
              </a>
            </div>
          </nav>
        </header>
      ) : (
        <Navbar />
      )}
      <main className={accent === "flutter" ? "flutter-painter-theme" : undefined}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
