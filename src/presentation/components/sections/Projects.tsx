import { ArrowUpRight, Github } from "lucide-react";
import { Card } from "@/presentation/components/ui/Card";
import { Tag } from "@/presentation/components/ui/Tag";
import { Eyebrow, RedDot } from "@/presentation/components/ui/Eyebrow";
import { featuredProjects } from "@/infrastructure/content/projects.data";
import { socialLinks } from "@/config/site";

export default function Projects() {
  return (
    <section id="projects" className="container-page py-5 sm:py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>projects</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
            Siro On Projects<RedDot />
          </h2>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {featuredProjects.map((p) => (
          <Card
            key={p.name}
            as="a"
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-ink dark:text-cloud">
                {p.name}
              </h3>
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
              {p.linkLabel} ↗
            </span>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 dark:border-cloud/15 px-6 py-3 font-mono text-sm text-ink dark:text-cloud transition-colors hover:border-brand hover:text-brand"
        >
          <Github size={16} />
          View All My Projects &amp; Open Source Work
        </a>
      </div>
    </section>
  );
}
