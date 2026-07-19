import { Card } from "@/presentation/components/ui/Card";
import { Tag } from "@/presentation/components/ui/Tag";
import { Eyebrow, RedDot } from "@/presentation/components/ui/Eyebrow";
import {
  experience,
  earlierExperience,
} from "@/infrastructure/content/experience.data";

export default function WorkExperience() {
  const [featured, pondus, adanian, growMobile] = experience;

  return (
    <section id="work" className="container-page py-5 sm:py-5">
      <Eyebrow>work</Eyebrow>
      <h2 className="mb-8 font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
        Siro At Work<RedDot />
      </h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2">
        <Card className="flex flex-col p-4 md:col-start-1 md:row-span-2 md:row-start-1">
          <h3 className="font-display text-xl font-semibold text-ink dark:text-cloud">
            {featured.company}
          </h3>
          <p className="mt-0.5 font-mono text-lg text-ink-soft dark:text-cloud-soft">
            {featured.title}
          </p>
          <p className="mt-0.6 font-mono text-[0.75rem] text-ink-faint dark:text-cloud-soft">
            {featured.period} · {featured.duration}
          </p>
          <ul className="mt-3 flex-1 list-disc space-y-1 pl-3.5 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft marker:text-brand">
            {featured.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {featured.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col p-4 md:col-start-2 md:row-start-1">
          <h3 className="font-display text-base font-semibold text-ink dark:text-cloud">
            {pondus.company}
          </h3>
          <p className="mt-0.5 font-mono text-xs text-ink-soft dark:text-cloud-soft">
            {pondus.title}
          </p>
          <p className="mt-0.5 font-mono text-[0.68rem] text-ink-faint dark:text-cloud-soft">
            {pondus.period} · {pondus.duration}
          </p>
          <ul className="mt-2 flex-1 list-disc space-y-1 pl-3.5 text-xs leading-relaxed text-ink-soft dark:text-cloud-soft marker:text-brand">
            {pondus.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {pondus.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col p-4 md:col-start-3 md:row-start-1">
          <h3 className="font-display text-base font-semibold text-ink dark:text-cloud">
            {growMobile.company}
          </h3>
          <p className="mt-0.5 font-mono text-xs text-ink-soft dark:text-cloud-soft">
            {growMobile.title}
          </p>
          <p className="mt-0.5 font-mono text-[0.68rem] text-ink-faint dark:text-cloud-soft">
            {growMobile.period} · {growMobile.duration}
          </p>
          <ul className="mt-2 flex-1 list-disc space-y-1 pl-3.5 text-xs leading-relaxed text-ink-soft dark:text-cloud-soft marker:text-brand">
            {growMobile.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {growMobile.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col p-4 md:col-start-2 md:row-start-2">
          <h3 className="font-display text-base font-semibold text-ink dark:text-cloud">
            {adanian.company}
          </h3>
          <p className="mt-0.5 font-mono text-xs text-ink-soft dark:text-cloud-soft">
            {adanian.title}
          </p>
          <p className="mt-0.5 font-mono text-[0.68rem] text-ink-faint dark:text-cloud-soft">
            {adanian.period} · {adanian.duration}
          </p>
          <ul className="mt-2 flex-1 list-disc space-y-1 pl-3.5 text-xs leading-relaxed text-ink-soft dark:text-cloud-soft marker:text-brand">
            {adanian.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {adanian.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col p-4 md:col-start-3 md:row-start-2">
          <ul className="space-y-2.5">
            {earlierExperience.map((e) => (
              <li key={e.company}>
                <p className="font-display text-xs font-semibold text-ink dark:text-cloud">
                  {e.company}
                </p>
                <p className="font-mono text-[0.6rem] text-ink-faint dark:text-cloud-soft">
                  {e.title} · {e.period}
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-3.5 text-[0.7rem] leading-relaxed text-ink-soft dark:text-cloud-soft marker:text-brand">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {e.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
