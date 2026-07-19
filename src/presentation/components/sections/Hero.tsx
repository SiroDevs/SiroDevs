import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RedDot } from "../ui/Eyebrow";

export default function Hero() {
  return (
    <section id="top" className="container-page py-5 sm:py-10">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
        <div className="animate-rise">
          <p className="eyebrow mb-5">who am i</p>
          <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink dark:text-cloud sm:text-6xl">
            Siro Jackson builds
            <br />
            software that ships
            <RedDot />
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft dark:text-cloud-soft">
            A software development engineer based in Nairobi with many years of
            manifesting ideas into apps — Flutter, Android, iOS, and Frontend. I
            took Britam&apos;s FA app from concept to the App Store and Play
            Store.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-mono text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Start a conversation with me
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#projects"
              className="font-mono text-sm text-ink-soft dark:text-cloud-soft underline decoration-ink-faint/40 dark:decoration-cloud-soft/40 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
            >
              See my work
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-ink-faint dark:text-cloud-soft">
            <span>Nairobi, Kenya</span>
            <span className="text-paper-line dark:text-night-line">/</span>
            <span>Flutter · Kotlin · Swift · Next.Js</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:120ms]">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand/10 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-paper-line dark:border-night-line bg-paper-raised dark:bg-night-raised shadow-[0_20px_60px_-25px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/profile.jpg"
              alt="Siro Jackson at work"
              width={640}
              height={800}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-paper-line dark:border-night-line bg-paper-raised dark:bg-night-raised px-4 py-3 font-mono text-xs shadow-lg sm:block">
            <span className="text-brand">🥳</span> 7+ years shipping
          </div>
        </div>
      </div>
    </section>
  );
}
