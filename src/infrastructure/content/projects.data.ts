import type { Project } from "@/domain/entities/project";

export const projects: Project[] = [
  {
    name: "BibleLib",
    period: "Aug 2025 - Present",
    description:
      "A clean, offline-first Bible reader built for focused study. Explore a number of translations side by side, search instantly, personalize your reading experience, and keep everything organized with bookmarks, notes, reading history, and reusable scripture lists for sermons, studies, or personal devotions.",
    tags: ["Kotlin", "Jetpack Compose", "Bible"],
    href: "/BibleLib",
    linkLabel: "View BibleLib",
  },
  {
    name: "YouPlot",
    period: "April 2026 - Present",
    description:
      "YouPlot is your ultimate outdoor activity companion, designed for runners, cyclists, hikers, and walkers who want more than just a tracker. Plan your adventure before you leave, then let YouPlot keep you on schedule while you're out there.",
    tags: ["Kotlin", "Jetpack Compose", "Maps", "Open Street Maps", "GPX", "FIT"],
    href: "/YouPlot",
    linkLabel: "View YouPlot",
  },
  {
    name: "Salama Kit",
    period: "Jun 2026",
    description:
      "An e-commerce app selling personal fire-safety kits to boarding-school students and parents, with PayStack payment integration built in.",
    tags: ["Next.js", "TypeScript", "Supabase", "PayStack"],
    href: "https://salamakit.co.ke",
    linkLabel: "salamakit.co.ke",
  },
  {
    name: "eChama",
    period: "Aug 2025 — Jun 2026",
    description:
      "A personal savings-group (chama) management system — meetings, contributions, loans, members, and roles — built on Supabase with row-level security, triggers, and functions.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    href: "https://echama.co.ke",
    linkLabel: "echama.co.ke",
    featured: true,
  },
  {
    name: "Xeddo Travelink",
    period: "May — Jun 2026",
    description:
      "Revived a stalled ride-hailing portal covering bookings, passengers, drivers, and saccos; integrated the M-Pesa Daraja API and deployed on Laravel Cloud.",
    tags: ["Laravel", "PHP", "Vite", "M-Pesa Daraja", "Postgres"],
    href: "https://xeddotravelink.co.ke",
    linkLabel: "xeddotravelink.co.ke",
  },
  {
    name: "Marine Cargo Insurance Portal",
    period: "May — Jul 2025",
    description:
      "Revived a stalled insurance portal and integrated the M-Pesa Daraja API for Paybill-based retail invoicing.",
    tags: ["Laravel", "React", "M-Pesa Daraja", "MariaDB"],
    href: "https://retail.minet.co.ke/marine",
    linkLabel: "retail.minet.co.ke",
    featured: true,
  },
  {
    name: "SongLib (Songs of Worship)",
    period: "Jul 2016 — Present",
    description:
      "An offline-first church hymn app, 8 years in the making: Java → Flutter (2020) → native Kotlin/Compose and Swift/SwiftUI (2024), on a custom MERN backend.",
    tags: ["Kotlin", "Jetpack Compose", "SwiftUI", "MongoDB"],
    href: "/SongLib",
    linkLabel: "View SongLib",
    featured: true,
  },
  {
    name: "SwahiLib (Kamusi ya Kiswahili)",
    period: "Mar 2022 — Present",
    description:
      "An offline-first Swahili dictionary app, migrated from Flutter to native Kotlin/Jetpack Compose and Swift/SwiftUI on a Supabase backend.",
    tags: ["Kotlin", "Jetpack Compose", "SwiftUI", "Supabase"],
    href: "/SwahiLib",
    linkLabel: "View SwahiLib",
    featured: true,
  },
  {
    name: "Savii Errands",
    period: "Apr — Jun 2025",
    description:
      "A service-hailing app connecting clients with delivery personnel via real-time location tracking on OpenStreetMap, with a Supabase backend.",
    tags: ["Flutter", "Dart", "OpenStreetMap", "Supabase"],
    href: "https://github.com/SiroDevs",
    linkLabel: "GitHub",
  },
  {
    name: "Kundli",
    period: "Mar — May 2022",
    description:
      "Migrated a legacy React Native app to Flutter, translating existing business logic and UI over to the new stack.",
    tags: ["Flutter", "Dart", "React Native"],
    href: "https://www.astrosage.com/kundli",
    linkLabel: "astrosage.com/kundli",
  },
  {
    name: "Infinadeck",
    period: "Jul — Dec 2022",
    description:
      "Built the desktop client for a customer-facing IoT product using Qt.",
    tags: ["Qt", "C++"],
    href: "https://infinadeck.com",
    linkLabel: "infinadeck.com",
  },
  {
    name: "MsingiPack",
    period: "Jan — May 2020",
    description:
      "Developed a .NET (C#) desktop client for MsingiPack's e-learning platform, enabling offline content access, downloads, and user activity tracking via REST APIs.",
    tags: [".NET", "C#"],
    href: "https://www.msingipack.cloud",
    linkLabel: "msingipack.cloud",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
