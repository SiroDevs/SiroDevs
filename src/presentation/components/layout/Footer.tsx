import { Github, Linkedin, Twitter, BookOpen, Smartphone } from "lucide-react";
import { site, socialLinks } from "@/config/site";

const links = [
  { label: "X (Twitter)", href: socialLinks.x, icon: Twitter },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
  { label: "GitHub", href: socialLinks.github, icon: Github },
  { label: "Blog", href: socialLinks.blog, icon: BookOpen },
  { label: "Play Store", href: socialLinks.playStore, icon: Smartphone },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper-line dark:border-night-line">
      <div className="container-page flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink dark:text-cloud">
            SIRO<span className="text-brand">.</span>
          </p>
          <p className="mt-1 font-mono text-xs text-ink-faint dark:text-cloud-soft">
            © {year} {site.name}. {site.location}.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 dark:border-cloud/10 text-ink-soft dark:text-cloud-soft transition-colors hover:border-brand hover:text-brand"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
