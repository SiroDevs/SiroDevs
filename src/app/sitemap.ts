import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const apps = ["songlib", "swahilib", "youplot", "biblelib"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...apps.flatMap((slug) => [
      {
        url: `${site.url}/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${site.url}/${slug}/privacy-policy`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      },
    ]),
  ];
}
