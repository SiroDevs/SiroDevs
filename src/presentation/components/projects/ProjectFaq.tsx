import { ChevronDown } from "lucide-react";

export interface ProjectFaqItem {
  question: string;
  answer: string;
}

interface ProjectFaqProps {
  id: string;
  title: string;
  description?: string;
  items: ProjectFaqItem[];
}

export default function ProjectFaq({
  id,
  title,
  description,
  items,
}: ProjectFaqProps) {
  return (
    <section id={id} className="container-page scroll-mt-24 py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-md leading-relaxed text-ink-soft dark:text-cloud-soft">
              {description}
            </p>
          )}
        </div>
        <div className="border-t border-paper-line dark:border-night-line">
          {items.map((item) => (
            <details
              key={item.question}
              className="group border-b border-paper-line dark:border-night-line"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-semibold text-ink dark:text-cloud">
                {item.question}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-brand transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="max-w-2xl pb-5 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
