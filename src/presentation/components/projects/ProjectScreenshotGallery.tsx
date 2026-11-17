import Image from "next/image";

export interface ProjectScreenshot {
  title: string;
  image: string;
  alt: string;
}

interface ProjectScreenshotGalleryProps {
  id?: string;
  title: string;
  description?: string;
  screenshots: ProjectScreenshot[];
}

export default function ProjectScreenshotGallery({
  id,
  title,
  description,
  screenshots,
}: ProjectScreenshotGalleryProps) {
  return (
    <section id={id} className="scroll-mt-24 border-y border-paper-line bg-paper-raised py-14 dark:border-night-line dark:bg-night-raised sm:py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 leading-relaxed text-ink-soft dark:text-cloud-soft">
              {description}
            </p>
          )}
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {screenshots.map((screenshot, index) => (
            <figure key={screenshot.title}>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-paper-line bg-night dark:border-night-line">
                <Image
                  src={screenshot.image}
                  alt={screenshot.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="rounded-xl object-contain"
                />
              </div>
              <figcaption className="mt-3 font-mono text-xs text-ink-faint dark:text-cloud-soft">
                {screenshot.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
