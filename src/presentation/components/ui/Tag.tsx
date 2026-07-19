import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-paper-line dark:border-night-line px-3 py-1 font-mono text-[0.68rem] text-ink-soft dark:text-cloud-soft">
      {children}
    </span>
  );
}
