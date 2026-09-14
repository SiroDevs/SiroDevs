import type { AppFeature } from "@/domain/entities/app-entity";

export const features: AppFeature[] = [
  {
    id: 1,
    icon: "offline",
    title: "Fully Offline",
    description: "Sync once, then worship without needing a connection.",
  },
  {
    id: 2,
    icon: "library",
    title: "Massive Song Library",
    description: "20+ songbooks and 10,000+ hymns in one place.",
  },
  {
    id: 3,
    icon: "languages",
    title: "10+ Languages",
    description: "English, Kiswahili, Luo, Luhya, Kikuyu, Kinyarwanda, and more.",
  },
  {
    id: 4,
    icon: "book",
    title: "Popular Songbooks",
    description: "Songs of Worship, Tenzi za Rohoni, SDA Hymnal, and more, add or swap anytime.",
  },
  {
    id: 5,
    icon: "search",
    title: "Smart Search",
    description: "Find any song instantly by title, number, or lyrics.",
  },
  {
    id: 6,
    icon: "presenter",
    title: "Verse Presenter",
    description: "Distraction-free, full-screen view with adjustable font size.",
  },
  {
    id: 7,
    icon: "drafts",
    title: "Personal Drafts",
    description: "Write and present your own songs alongside your songbooks.",
  },
  {
    id: 8,
    icon: "listings",
    title: "Custom Listings",
    description: "Organize songs into playlists for services and events.",
  },
  {
    id: 9,
    icon: "favorites",
    title: "Favorites",
    description: "Save the songs you love with one tap.",
  },
  {
    id: 10,
    icon: "history",
    title: "Search History",
    description: "Jump back to recent songs and searches instantly.",
  },
  {
    id: 11,
    icon: "sync",
    title: "Sync Across Devices",
    description: "Sign in with Google to keep drafts and favorites everywhere you go.",
  },
];
