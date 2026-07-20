"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/presentation/components/theme/ThemeToggle";

const links = [
  { href: "/#about", label: "About Me" },
  { href: "/projects", label: "My Projects" },
  { href: "/songlib", label: "SongLib" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/85 dark:bg-night/85 backdrop-blur-md border-b border-paper-line dark:border-night-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="/#top"
          className="font-display text-lg font-semibold tracking-tight text-ink dark:text-cloud"
        >
          SIRO
          <span className="text-brand">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-ink-soft dark:text-cloud-soft transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-full bg-brand px-5 py-2 font-mono text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Contact Me
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-ink dark:text-cloud"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-paper-line dark:border-night-line bg-paper dark:bg-night">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-mono text-sm text-ink-soft dark:text-cloud-soft hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand px-5 py-3 text-center font-mono text-sm font-medium text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
