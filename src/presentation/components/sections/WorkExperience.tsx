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
    <section id="work" className="container-page py-5 sm:py-10">
      <Eyebrow>work</Eyebrow>
      <h2 className="mb-10 font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
        Siro At Work<RedDot />
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        <Card className="flex flex-col p-6 md:col-start-1 md:row-span-2 md:row-start-1">
          <h3 className="font-display text-2xl font-semibold text-ink dark:text-cloud">
            {featured.company}
          </h3>
          <p className="mt-1 font-mono text-sm text-ink-soft dark:text-cloud-soft">
            {featured.title}
          </p>
          <p className="mt-1 font-mono text-xs text-ink-faint dark:text-cloud-soft">
            {featured.period} · {featured.duration}
          </p>
          <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft">
            {featured.body}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {featured.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col p-6 md:col-start-2 md:row-start-1">
          <h3 className="font-display text-xl font-semibold text-ink dark:text-cloud">
            {pondus.company}
          </h3>
          <p className="mt-1 font-mono text-sm text-ink-soft dark:text-cloud-soft">
            {pondus.title}
          </p>
          <p className="mt-1 font-mono text-xs text-ink-faint dark:text-cloud-soft">
            {pondus.period} · {pondus.duration}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft">
            {pondus.body}
          </p>
        </Card>

        <Card className="flex flex-col p-6 md:col-start-3 md:row-start-1">
          <h3 className="font-display text-xl font-semibold text-ink dark:text-cloud">
            {growMobile.company}
          </h3>
          <p className="mt-1 font-mono text-sm text-ink-soft dark:text-cloud-soft">
            {growMobile.title}
          </p>
          <p className="mt-1 font-mono text-xs text-ink-faint dark:text-cloud-soft">
            {growMobile.period} · {growMobile.duration}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft">
            {growMobile.body}
          </p>
        </Card>

        <Card className="flex flex-col p-6 md:col-start-2 md:row-start-2">
          <h3 className="font-display text-xl font-semibold text-ink dark:text-cloud">
            {adanian.company}
          </h3>
          <p className="mt-1 font-mono text-sm text-ink-soft dark:text-cloud-soft">
            {adanian.title}
          </p>
          <p className="mt-1 font-mono text-xs text-ink-faint dark:text-cloud-soft">
            {adanian.period} · {adanian.duration}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft">
            {adanian.body}
          </p>
        </Card>

        {/* Earlier roles, folded into a single summarized card */}
        <Card className="flex flex-col p-6 md:col-start-3 md:row-start-2">
          <span className="eyebrow mb-3">earlier</span>
          <ul className="space-y-4">
            {earlierExperience.map((e) => (
              <li key={e.company}>
                <p className="font-display text-sm font-semibold text-ink dark:text-cloud">
                  {e.company}
                </p>
                <p className="font-mono text-[0.68rem] text-ink-faint dark:text-cloud-soft">
                  {e.title} · {e.period}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft dark:text-cloud-soft">
                  {e.point}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
