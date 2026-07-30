import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { theme as songlibTheme } from "@/infrastructure/content/songlib/theme";
import { theme as swahilibTheme } from "@/infrastructure/content/swahilib/theme";
import { theme as youplotTheme } from "@/infrastructure/content/youplot/theme";
import { theme as biblelibTheme } from "@/infrastructure/content/biblelib/theme";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/SongLib`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/SongLib/${songlibTheme.privacyPath}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/SwahiLib`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/SwahiLib/${swahilibTheme.privacyPath}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/YouPlot`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/YouPlot/${youplotTheme.privacyPath}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/BibleLib`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/BibleLib/${biblelibTheme.privacyPath}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
