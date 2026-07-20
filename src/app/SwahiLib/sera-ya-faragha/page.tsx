import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { info } from "@/infrastructure/content/swahilib/app-info";
import { texts } from "@/infrastructure/content/swahilib/privacy-texts";
import type { PrivacyText } from "@/domain/entities/app-entity";

export default function SwahiLibPrivacyPolicy() {
  return (
    <div className="my-4 lg:my-8 mx-auto max-w-3xl">
      <Link
        href="/swahilib"
        className="inline-flex items-center gap-1.5 font-mono text-sm text-ink-soft dark:text-cloud-soft transition-colors hover:text-brand"
      >
        <ArrowLeft size={15} />
        Rudi kwa {info.appName}
      </Link>

      <div className="mt-6">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
          Sera ya Faragha
        </h1>
        <p className="mt-2 font-mono text-sm text-ink-faint dark:text-cloud-soft">
          Sera ya Faragha ya {info.appName}
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
