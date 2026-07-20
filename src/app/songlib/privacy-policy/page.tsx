import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { info } from "@/infrastructure/content/songlib/app-info";
import { texts } from "@/infrastructure/content/songlib/privacy-texts";
import { PrivacyText } from "@/domain/entities/app-entity";

export default function SongLibPrivacyPolicy() {
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
        <p className="mt-2 font-mono text-sm text-ink-faint dark:text-cloud-soft">
          Privacy Policy for {info.appName}
        </p>
      </div>

      <div className="mt-8">
        <p className="text-sm leading-relaxed text-ink-soft dark:text-cloud-soft">
          {info.privacyStatement}
        </p>

        {texts.map((text: PrivacyText) => (
          <div key={text.id} className="mt-8">
            <h2 className="font-display text-xl font-semibold text-ink dark:text-cloud">
              {text.title}
            </h2>
            <p
              className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft"
              style={{ whiteSpace: "pre-line" }}
            >
              {text.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
