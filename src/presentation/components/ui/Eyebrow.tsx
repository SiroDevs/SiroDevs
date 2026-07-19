export function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

export function RedDot() {
  return (
    <span className="text-brand">
      .
      <span className="inline-block w-[2px] animate-blink" aria-hidden>
        &nbsp;
      </span>
    </span>
  );
}
