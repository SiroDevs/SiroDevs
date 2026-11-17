import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface ProjectAction {
  label: string;
  href: string;
  external?: boolean;
}

interface ProjectHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
  image: string;
  imageAlt: string;
  primaryAction: ProjectAction;
  secondaryAction: ProjectAction;
}

export default function ProjectHero({
  eyebrow,
  title,
  description,
  note,
  image,
  imageAlt,
  primaryAction,
  secondaryAction,
}: ProjectHeroProps) {
  return (
    <section className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-24">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink dark:text-cloud sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft dark:text-cloud-soft sm:text-lg">
          {description}
        </p>
        {note && (
          <p className="mt-3 max-w-xl text-sm text-ink-faint dark:text-cloud-soft">
            {note}
          </p>
        )}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={primaryAction.href}
            {...(primaryAction.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className="inline-flex items-center gap-2 border border-brand bg-brand px-5 py-3 font-mono text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            {primaryAction.label}
            {primaryAction.external ? (
              <ArrowUpRight size={16} aria-hidden />
            ) : (
              <ArrowDown size={16} aria-hidden />
            )}
          </a>
          <a
            href={secondaryAction.href}
            {...(secondaryAction.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className="inline-flex items-center border border-ink/20 px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-brand hover:text-brand dark:border-cloud/20 dark:text-cloud"
          >
            {secondaryAction.label}
          </a>
        </div>
      </div>
      <div className="relative aspect-[16/10] border border-paper-line bg-night dark:border-night-line">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
