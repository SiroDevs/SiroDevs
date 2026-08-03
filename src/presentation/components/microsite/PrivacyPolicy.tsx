import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { AppInfo } from "@/domain/entities/app-entity";

interface PrivacyPolicyProps {
  info: AppInfo;
}

export default function PrivacyPolicy({ info }: PrivacyPolicyProps) {
  return (
    <div className="my-4 lg:my-8 mx-auto max-w-3xl">
      <Link
        href={`/${info.appName}`}
        className="inline-flex items-center gap-1.5 font-mono text-sm text-ink-soft dark:text-cloud-soft transition-colors hover:text-brand"
      >
        <ArrowLeft size={15} />
        Back to {info.appName}
      </Link>

      <div className="mt-6">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
          Privacy Policy
        </h1>
        <h3 className="font-display text-1xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-2xl mt-5">
          {info.appName}: {info.tagline}
        </h3>
        <p className="mt-2 font-mono text-sm text-ink-faint dark:text-cloud-soft">
          Last updated: August 3rd, 2026
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-xl font-semibold text-ink dark:text-cloud mt-4">
          Introduction
        </h2>
        <p className="text-sm leading-relaxed text-ink-soft dark:text-cloud-soft">
          We understand the importance of privacy and are committed to
          protecting the personal information of our users. This privacy policy
          outlines how we collect, use, and protect the information you provide
          when using our apps.
        </p>

        <div className="mt-8">
          <h2 className="font-display text-xl font-semibold text-ink dark:text-cloud mt-4">
            Information Collection and Use
          </h2>
          <p
            className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft"
            style={{ whiteSpace: "pre-line" }}
          >
            <b>{info.appName}</b> is designed to function without collecting any
            personal information from users. We do not require you to submit any
            personal information to this app. However, it may collect
            non-personal information, such as your device type, operating
            system, and other technical data, to improve the performance of the
            app.
          </p>

          <h2 className="font-display text-xl font-semibold text-ink dark:text-cloud mt-4">
            Information Sharing
          </h2>
          <p
            className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft"
            style={{ whiteSpace: "pre-line" }}
          >
            None of you personal information is shared with third-party
            companies, organisations, or individuals. We do not sell, trade, or
            rent any personal information to others.
            <br></br>
            <br></br>
            Besides, this app is intended for adults only. However, if it falls
            into the hands of minors, we do not knowingly collect any personal
            information from minors. We cannot control the actions of minors who
            use <b>{info.appName}</b>, and we are not responsible for any
            information that they may submit.
          </p>

          <h2 className="font-display text-xl font-semibold text-ink dark:text-cloud mt-4">
            Data Security
          </h2>
          <p
            className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft"
            style={{ whiteSpace: "pre-line" }}
          >
            We take data security seriously and use reasonable measures to
            protect the personal information we collect. However, we cannot
            guarantee that unauthorised third parties will not be able to access
            and obtain such information. If you believe that your personal
            information has been compromised, please contact us immediately at{" "}
            <Link href="mailto:futuristicken@gmail.com" className="text-red">
              <i>futuristicken@gmail.com</i>
            </Link>
            .
          </p>

          <h2 className="font-display text-xl font-semibold text-ink dark:text-cloud mt-4">
            Changes to the Privacy Policy
          </h2>
          <p
            className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft"
            style={{ whiteSpace: "pre-line" }}
          >
            We reserve the right to update or modify this privacy policy at any
            time without prior notice. We encourage you to review this privacy
            policy periodically to stay informed about how we are protecting
            your personal information.
          </p>

          <h2 className="font-display text-xl font-semibold text-ink dark:text-cloud mt-4">
            Contacts
          </h2>
          <p
            className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft"
            style={{ whiteSpace: "pre-line" }}
          >
            If you have any questions about this statement or any privacy issues
            in our applications or services, feel free to contact us directly or
            via the <Link href="/#contact"><b>Contact Me</b></Link> on this site.
          </p>
          <br></br>
          <p>
            <b>Siro Jackson</b>,<br></br>
            Nairobi, Kenya.
          </p>
        </div>
      </div>
    </div>
  );
}
