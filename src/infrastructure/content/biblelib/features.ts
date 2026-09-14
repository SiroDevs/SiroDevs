import type { AppFeature } from "@/domain/entities/app-entity";

export const features: AppFeature[] = [
  {
    id: 1,
    icon: "offline",
    title: "Fully Offline",
    description: "Download once, then read without a connection.",
  },
  {
    id: 2,
    icon: "library",
    title: "Massive Bible Library",
    description: "Dozens of translations across languages and countries.",
  },
  {
    id: 3,
    icon: "translations",
    title: "Read Side by Side",
    description: "Compare up to 6 translations in parallel view.",
  },
  {
    id: 4,
    icon: "download",
    title: "Resumable Downloads",
    description: "Lost signal? BibleLib picks up right where it stopped.",
  },
  {
    id: 5,
    icon: "bookmarks",
    title: "Bookmarks & Notes",
    description: "Highlight verses and attach notes, stored locally.",
  },
  {
    id: 6,
    icon: "history",
    title: "Reading History",
    description: "Always pick up right where you left off.",
  },
  {
    id: 7,
    icon: "personalize",
    title: "Personalized Reading",
    description: "Adjust font, size, and background for day or night.",
  },
  {
    id: 8,
    icon: "search",
    title: "Instant Search",
    description: "Search any translation and jump straight to the verse.",
  },
  {
    id: 9,
    icon: "lists",
    title: "Saved Verse Lists",
    description: "Queue verses for a sermon or study, then reuse anytime.",
  },
];
