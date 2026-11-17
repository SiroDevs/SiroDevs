function ShimmerBlock({ className }: { className: string }) {
  return <div className={`skeleton-shimmer rounded-lg ${className}`} aria-hidden />;
}

export default function FlutterPainterDownloadSkeleton() {
  return (
    <section id="download" className="bg-night py-16 sm:py-20" aria-busy="true">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-2xl space-y-3">
          <ShimmerBlock className="mx-auto h-4 w-24" />
          <ShimmerBlock className="mx-auto h-9 w-3/4" />
          <ShimmerBlock className="mx-auto h-4 w-full" />
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {["windows", "macos", "linux"].map((platform) => (
            <article key={platform} className="rounded-2xl border border-white/15 p-6">
              <ShimmerBlock className="h-7 w-36" />
              <ShimmerBlock className="mt-4 h-12 w-full" />
              <ShimmerBlock className="mt-6 h-12 w-full" />
              <ShimmerBlock className="mt-3 h-12 w-2/3" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
