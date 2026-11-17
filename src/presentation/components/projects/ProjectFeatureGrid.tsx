import type { LucideIcon } from "lucide-react";
import { projectAccentStyles, type ProjectAccent } from "./project-accent";

export interface ProjectFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProjectFeatureGridProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  features: ProjectFeature[];
  accent?: ProjectAccent;
}

export default function ProjectFeatureGrid({
  id,
  eyebrow,
  title,
  description,
  features,
  accent = "brand",
}: ProjectFeatureGridProps) {
  const accentStyles = projectAccentStyles[accent];

  return (
    <section id={id} className="container-page scroll-mt-24 py-14 sm:py-20">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 leading-relaxed text-ink-soft dark:text-cloud-soft">
            {description}
          </p>
        )}
      </div>
      <div className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title: featureTitle, description: text }) => (
          <article
            key={featureTitle}
            className="border-t border-paper-line py-5 dark:border-night-line"
          >
            <Icon size={22} strokeWidth={1.8} className={accentStyles.text} aria-hidden />
            <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-cloud">
              {featureTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft">
              {text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
