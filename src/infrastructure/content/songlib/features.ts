import type { AppFeature } from "@/domain/entities/app-entity";

export const features: AppFeature[] = [
  {
    id: 1,
    icon: "offline",
    title: "Completely Offline Access",
    description:
      "Worship without interruption. Once your songbooks are synced, SongLib works entirely offline, no internet connection needed during services or personal devotion.",
  },
  {
    id: 2,
    icon: "library",
    title: "Massive Song Library",
    description:
      "Access 20+ songbooks with over 10,000 hymns and worship songs, all in one place, your complete digital hymnal.",
  },
  {
    id: 3,
    icon: "languages",
    title: "Worship in Your Language",
    description:
      "Support for 10+ African languages, including English, Kiswahili, Ekegusii, Luo, Luhya, Kalenjin, Kamba, Gikuyu, Kinyarwanda, Chichewa, Bemba, and Luganda.",
  },
  {
    id: 4,
    icon: "book",
    title: "Popular Songbooks Included",
    description:
      "Songs of Worship, Nyimbo za Injili, Third Exodus Assembly Hymnal, Tenzi za Rohoni, SDA Hymnal, Bemba Hymnal, Guhimbaza Imana, and more, with the freedom to add or swap songbooks anytime from settings.",
  },
  {
    id: 5,
    icon: "search",
    title: "Smart Search",
    description:
      "Find any song instantly by title, song number, or lyrics. No more flipping through pages during worship.",
  },
  {
    id: 6,
    icon: "presenter",
    title: "Full-Screen Verse Presenter",
    description:
      "Swipe smoothly between verses in a distraction-free, full-screen view, complete with a page-curl effect and adjustable font size.",
  },
  {
    id: 7,
    icon: "drafts",
    title: "Personal Drafts",
    description:
      "Write your own song drafts and present them right alongside your songbooks, perfect for original pieces and special arrangements.",
  },
  {
    id: 8,
    icon: "listings",
    title: "Custom Song Listings",
    description:
      "Organize songs into personalized listings for services, events, or personal devotion.",
  },
  {
    id: 9,
    icon: "favorites",
    title: "Favorite Songs",
    description:
      "Build your collection of beloved hymns with one tap, quick access to the songs that speak to your heart.",
  },
  {
    id: 10,
    icon: "history",
    title: "Search & View History",
    description:
      "Jump back to recently viewed songs and past searches without hunting for them again.",
  },
  {
    id: 11,
    icon: "sync",
    title: "Contribute & Sync",
    description:
      "Sign in with Google to submit song corrections for admin review, and keep your drafts, edits, and songbook selections synced across every device.",
  },
];
