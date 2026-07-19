import { Eyebrow, RedDot } from "@/presentation/components/ui/Eyebrow";

export default function About() {
  return (
    <section id="about" className="container-page py-5 sm:py-10">
      <div className="space-y-10">
        <div>
          <Eyebrow>about</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
            About Siro<RedDot />
          </h2>
        </div>

        <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-soft dark:text-cloud-soft">
          <p>
            I&apos;m a software development engineer with over 7 years of
            experience shipping production software across native Android
            (Kotlin), native iOS (Swift), Flutter, and React — end-to-end, from
            backend to mobile to web.
          </p>

          <p>
            At Britam, I took the Financial Advisor app from the concept it was
            to a live release on both the App Store and Play Store, then helped
            build the admin portal underwriters use to review policy apps
            alongside it. I led sprint planning and feature prioritization
            directly with business teams, so I&apos;m as comfortable translating
            a stakeholder&apos;s goal into a technical plan as I am writing the
            code for it. Before that, I&apos;ve shipped micro-transaction
            platforms across four African countries, revived stalled portals
            under tight deadlines, and kept two personal apps — a Swahili
            dictionary and a church hymn book — alive and evolving for years
            because people still use them.
          </p>

          <p>
            If you're looking for someone to manifest your app idea—or save your
            sinking ship—I am your guy. I build high-quality mobile apps with
            Flutter, Kotlin on Android, or Swift on iOS.
          </p>

          <p>
            For modern web apps or front-end development, I deliver fast,
            scalable solutions with Next.js, backed by Supabase for backend
            services. When a full-stack solution is needed, Laravel is my
            framework of choice for building secure, reliable, and maintainable
            apps.
          </p>

          <p>
            Whether you're starting from scratch, adding new features, or fixing
            an existing codebase, I can help turn your vision into a polished,
            production-ready product.
          </p>
        </div>
      </div>
    </section>
  );
}
