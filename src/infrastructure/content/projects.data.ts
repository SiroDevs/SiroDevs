import type { Project } from "@/domain/entities/project";

export const featuredProjects: Project[] = [
  {
    name: "eChama",
    period: "Aug 2025 — Jun 2026",
    description:
      "A personal savings-group (chama) management system — meetings, contributions, loans, members, and roles — built on Supabase with row-level security, triggers, and functions.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    href: "https://echama.co.ke",
    linkLabel: "echama.co.ke",
  },
  {
    name: "Marine Cargo Insurance Portal",
    period: "May — Jul 2025",
    description:
      "Revived a stalled insurance portal and integrated the M-Pesa Daraja API for Paybill-based retail invoicing.",
    tags: ["Laravel", "React", "M-Pesa Daraja", "MariaDB"],
    href: "https://retail.minet.co.ke/marine",
    linkLabel: "retail.minet.co.ke",
  },
  {
    name: "SongLib",
    period: "Jul 2016 — Present",
    description:
      "An offline-first church hymn app, 8 years in the making: Java → Flutter (2020) → native Kotlin/Compose and Swift/SwiftUI (2024), on a custom MERN backend.",
    tags: ["Kotlin", "SwiftUI", "MongoDB"],
    href: "https://github.com/SiroDevs",
    linkLabel: "GitHub",
  },
  {
    name: "SwahiLib",
    period: "Mar 2022 — Present",
    description:
      "An offline-first Swahili dictionary app, migrated from Flutter to native Kotlin/Jetpack Compose and Swift/SwiftUI on a Supabase backend.",
    tags: ["Kotlin", "SwiftUI", "Supabase"],
    href: "https://github.com/SiroDevs",
    linkLabel: "GitHub",
  },
];
