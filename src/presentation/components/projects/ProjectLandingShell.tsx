import Navbar from "@/presentation/components/navigation/Navbar";
import Footer from "@/presentation/components/navigation/Footer";
import ScrollToTop from "@/presentation/components/ui/ScrollToTop";
import ThemeToggle from "@/presentation/theme/ThemeToggle";

interface ProjectLandingNavigation {
  links: Array<{ href: string; label: string }>;
  action: { href: string; label: string; external?: boolean };
}

export default function ProjectLandingShell({
  children,
  navigation,
}: {
  children: React.ReactNode;
  navigation?: ProjectLandingNavigation;
}) {
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
                  className="font-mono text-sm text-ink-soft transition-colors hover:text-brand dark:text-cloud-soft"
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
                className="border border-brand bg-brand px-3 py-2 font-mono text-xs font-semibold text-white transition-colors hover:bg-brand-dark sm:px-4 sm:text-sm"
              >
                {navigation.action.label}
              </a>
            </div>
          </nav>
        </header>
      ) : (
        <Navbar />
      )}
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
