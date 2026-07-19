import type { Experience, EarlierExperience } from "@/domain/entities/experience";

export const experience: Experience[] = [
  {
    company: "Britam EA",
    title: "Apps Developer",
    period: "Jun 2023 — May 2025",
    duration: "2 yrs · Hybrid",
    body: "Spearheaded a cross-platform Flutter app for Britam's Financial Advisors, built from scratch to a live release that lets FAs track and manage sales. Built a NestJS admin portal for underwriters to review policy applications, led sprint planning with business teams, and mentored junior developers through code review.",
    tags: ["Flutter", "NestJS", "Leadership"],
  },
  {
    company: "Pondus Ltd",
    title: "Mobile App Developer",
    period: "Jan — May 2023",
    duration: "5 mos · Remote",
    body: "Shipped features and fixes across Android, iOS, and web in a cross-functional team — contributing to a 30% increase in user engagement.",
    tags: ["Android", "iOS", "Web"],
  },
  {
    company: "Adanian Labs",
    title: "Mobile App Developer",
    period: "Aug 2021 — Jul 2022",
    duration: "1 yr · On-site",
    body: "Built MooveBeta, a Flutter micro-transaction and mobile-money platform spanning Kenya, Uganda, Nigeria, and South Africa, with a 5-developer team.",
    tags: ["Flutter", "Fintech"],
  },
  {
    company: "Grow Mobile Tech",
    title: "Desktop App Developer",
    period: "Apr 2020 — Mar 2021",
    duration: "1 yr · On-site",
    body: "Built .NET (C#) desktop clients for e-learning platforms (KEC App, MsingiPack), delivering on budget with optimized data storage.",
    tags: [".NET", "C#"],
  },
];

export const earlierExperience: EarlierExperience[] = [
  {
    company: "Diamond Eng. Co. Ltd",
    title: "Software Developer",
    period: "Feb 2019 — Jan 2020",
    point:
      "Built a customer/sales management system end-to-end (PHP REST API + Java mobile app) with a 3-person team; liaised between engineering and management.",
  },
  {
    company: "Kenya School of TVET",
    title: "Software Developer Intern",
    period: "Jan — Jul 2017",
    point:
      "Built a Complaint Management System (PHP/JavaScript) for tracking, categorizing, and resolving institutional issues.",
  },
];
