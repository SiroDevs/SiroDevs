import { ArrowUpRight } from "lucide-react";

interface ProjectBottomCtaProps {
  title: string;
  description: string;
  label: string;
  href: string;
  external?: boolean;
}

export default function ProjectBottomCta({
  title,
  description,
  label,
  href,
  external,
}: ProjectBottomCtaProps) {
  return (
    <section className="container-page py-14 sm:py-20">
      <div className="flex flex-col gap-6 border-y border-paper-line py-8 dark:border-night-line sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-ink dark:text-cloud sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft sm:text-base">
            {description}
          </p>
        </div>
        <a
          href={href}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-brand bg-brand px-5 py-3 font-mono text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          {label}
          <ArrowUpRight size={16} aria-hidden />
        </a>
      </div>
    </section>
  );
}
