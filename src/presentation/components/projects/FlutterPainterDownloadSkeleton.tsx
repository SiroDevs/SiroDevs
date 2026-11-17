function ShimmerBlock({ className }: { className: string }) {
  return <div className={`skeleton-shimmer rounded-lg ${className}`} aria-hidden />;
}

export default function FlutterPainterDownloadSkeleton() {
  return (
    <section
      id="download"
      className="bg-flutter-dark py-24 text-white lg:py-28"
      aria-busy="true"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 space-y-4 text-center">
          <ShimmerBlock className="mx-auto h-12 w-3/4" />
          <ShimmerBlock className="mx-auto h-6 w-full max-w-lg" />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {["windows", "macos", "linux"].map((platform) => (
            <article
              key={platform}
              className="rounded-2xl border border-white/10 bg-black/20 p-7"
            >
              <ShimmerBlock className="h-7 w-36" />
              <ShimmerBlock className="mt-10 h-[3.4rem] w-full rounded-lg" />
              <ShimmerBlock className="mt-4 h-5 w-4/5" />
              <ShimmerBlock className="mt-12 h-5 w-2/5" />
              <ShimmerBlock className="mt-3 h-[3.4rem] w-full rounded-lg" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
