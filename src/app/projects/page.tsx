import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import Navbar from "@/presentation/components/layout/Navbar";
import Footer from "@/presentation/components/layout/Footer";
import ScrollToTop from "@/presentation/components/ui/ScrollToTop";
import { Card } from "@/presentation/components/ui/Card";
import { Tag } from "@/presentation/components/ui/Tag";
import { Eyebrow, RedDot } from "@/presentation/components/ui/Eyebrow";
import { projects } from "@/infrastructure/content/projects.data";
import { site, socialLinks } from "@/config/site";

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description:
    "A full list of the apps, platforms, and open-source work Siro Jackson has built — spanning Flutter, native Android and iOS, React, Next.js, and Laravel.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container-page py-5 sm:py-5">

          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>projects</Eyebrow>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
                My Projects &amp; Open Source Work<RedDot />
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft dark:text-cloud-soft">
                Every shipped app, revived portal, and long-running side project —
                from client work to apps I still maintain for fun, years later.
              </p>
            </div>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 dark:border-cloud/15 px-5 py-2.5 font-mono text-sm text-ink dark:text-cloud transition-colors hover:border-brand hover:text-brand"
            >
              <Github size={16} />
              GitHub Profile
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => {
              const isInternal = p.href.startsWith("/");
              return (
                <Card
                  key={p.name}
                  as={isInternal ? Link : "a"}
                  href={p.href}
                  {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex flex-col p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-lg font-semibold leading-snug text-ink dark:text-cloud">
                      {p.name}
                    </h2>
                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                    />
                  </div>
                  <p className="mt-1 font-mono text-xs text-ink-faint dark:text-cloud-soft">
                    {p.period}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <span className="mt-4 font-mono text-xs text-brand">
                    {p.linkLabel} {isInternal ? "→" : "↗"}
                  </span>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
