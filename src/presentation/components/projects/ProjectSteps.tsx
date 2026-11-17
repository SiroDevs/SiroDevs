export interface ProjectStep {
  title: string;
  description: string;
}

interface ProjectStepsProps {
  id?: string;
  title: string;
  description?: string;
  steps: ProjectStep[];
}

export default function ProjectSteps({
  id,
  title,
  description,
  steps,
}: ProjectStepsProps) {
  return (
    <section id={id} className="scroll-mt-24 border-y border-paper-line bg-paper-raised py-14 dark:border-night-line dark:bg-night-raised sm:py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 leading-relaxed text-ink-soft dark:text-cloud-soft">
              {description}
            </p>
          )}
        </div>
        <ol className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="border-t border-paper-line pt-4 dark:border-night-line"
            >
              <span className="font-mono text-xs text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink dark:text-cloud">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
