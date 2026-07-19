import { ArrowUpRight } from "lucide-react";
import { Card } from "@/presentation/components/ui/Card";
import { Eyebrow, RedDot } from "@/presentation/components/ui/Eyebrow";
import { getLatestPostsUseCase } from "@/infrastructure/container";
import { socialLinks } from "@/config/site";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function Blog() {
  const posts = await getLatestPostsUseCase.execute(3);

  return (
    <section id="blog" className="container-page py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>blog</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
            Siro&apos;s Tech Blog<RedDot />
          </h2>
        </div>
        <a
          href={socialLinks.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-ink-soft dark:text-cloud-soft underline decoration-ink-faint/40 dark:decoration-cloud-soft/40 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
        >
          Read all posts
        </a>
      </div>

      {posts.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-paper-line dark:border-night-line p-10 text-center">
          <p className="text-sm text-ink-soft dark:text-cloud-soft">
            New posts are on the way. In the meantime,{" "}
            <a
              href={socialLinks.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline underline-offset-4"
            >
              visit the blog directly
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              as="a"
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden"
            >
              {post.coverImageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.coverImageUrl}
                  alt={post.title}
                  className="h-40 w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs text-ink-faint dark:text-cloud-soft">
                  {formatDate(post.publishedAt)} · {post.readTimeInMinutes} min read
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink dark:text-cloud">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft dark:text-cloud-soft line-clamp-3">
                  {post.brief}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-brand">
                  Read post
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
