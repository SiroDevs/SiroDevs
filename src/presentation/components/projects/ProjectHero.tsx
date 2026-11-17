import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { projectAccentStyles, type ProjectAccent } from "./project-accent";

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
  image?: string;
  imageAlt?: string;
  brandIcon?: ReactNode;
  accent?: ProjectAccent;
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
  brandIcon,
  accent = "brand",
  primaryAction,
  secondaryAction,
}: ProjectHeroProps) {
  const accentStyles = projectAccentStyles[accent];

  return (
    <section
      className={`container-page grid items-center gap-10 py-14 sm:py-20 lg:gap-12 lg:py-24 ${
        image ? "lg:grid-cols-[0.9fr_1.1fr]" : "text-center"
      }`}
    >
      <div className={image ? "" : "mx-auto max-w-4xl"}>
        {brandIcon && (
          <div className={`mb-5 flex ${image ? "justify-start" : "justify-center"}`}>
            <span className={`inline-flex size-16 items-center justify-center rounded-2xl border ${accentStyles.iconSurface}`}>
              {brandIcon}
            </span>
          </div>
        )}
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink dark:text-cloud sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-ink-soft dark:text-cloud-soft sm:text-lg ${
            image ? "" : "mx-auto"
          }`}
        >
          {description}
        </p>
        {note && (
          <p
            className={`mt-3 max-w-xl text-sm text-ink-faint dark:text-cloud-soft ${
              image ? "" : "mx-auto"
            }`}
          >
            {note}
          </p>
        )}
        <div
          className={`mt-7 flex flex-wrap gap-3 ${image ? "" : "justify-center"}`}
        >
          <a
            href={primaryAction.href}
            {...(primaryAction.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 font-mono text-sm font-semibold text-white transition-colors ${accentStyles.action}`}
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
            className={`inline-flex items-center rounded-lg border border-ink/20 px-5 py-3 font-mono text-sm text-ink transition-colors dark:border-cloud/20 dark:text-cloud ${accentStyles.hoverBorder} ${accentStyles.hoverText}`}
          >
            {secondaryAction.label}
          </a>
        </div>
      </div>
      {image && imageAlt && (
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-paper-line bg-night dark:border-night-line">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="rounded-xl object-contain"
            priority
          />
        </div>
      )}
    </section>
  );
}
