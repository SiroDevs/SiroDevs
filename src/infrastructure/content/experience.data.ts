import type { Experience, EarlierExperience } from "@/domain/entities/experience";

export const experience: Experience[] = [
  {
    company: "Britam EA",
    title: "Apps Developer",
    period: "Jun 2023 — May 2025",
    duration: "2 yrs · Hybrid",
    bullets: [
      "Spearheaded a cross-platform Flutter app for Britam's Financial Advisors, building it from the concept it was to a live release on both the App Store and Play Store. The app would soon be enabling FAs track and manage sales",
      "Built an admin portal using NextJS for underwriters to review policy applications that stream in from the mobile my team had shipped.",
      "Led sprint planning with business teams",
      "Mentored junior developers via code review.",
    ],
    tags: ["Flutter", "NextJS", "Leadership"],
  },
  {
    company: "Pondus Ltd",
    title: "Mobile App Developer",
    period: "Jan — May 2023",
    duration: "5 mos · Remote",
    bullets: [
      "Shipped features and fixes across Android, iOS, and web.",
      "Helped drive a 30% increase in user engagement.",
    ],
    tags: ["Android", "iOS", "Web"],
  },
  {
    company: "Adanian Labs",
    title: "Mobile App Developer",
    period: "Aug 2021 — Jul 2022",
    duration: "1 yr · On-site",
    bullets: [
      "Built MooveBeta, a Flutter micro-transaction and mobile-money platform.",
      "Shipped across Kenya, Uganda, Nigeria, and South Africa with a 5-dev team.",
    ],
    tags: ["Flutter", "Fintech"],
  },
  {
    company: "Grow Mobile Tech",
    title: "Desktop App Developer",
    period: "Apr 2020 — Mar 2021",
    duration: "1 yr · On-site",
    bullets: [
      "Built .NET (C#) desktop clients for two e-learning platforms.",
      "Delivered on budget with optimized offline data storage.",
    ],
    tags: [".NET", "C#"],
  },
];

export const earlierExperience: EarlierExperience[] = [
  {
    company: "Diamond Eng. Co. Ltd",
    title: "Software Developer",
    period: "Feb 2019 — Jan 2020",
    bullets: [
      "Built a customer/sales system.",
    ],
    tags: ["PHP", "Java"],
  },
  {
    company: "Kenya School of TVET",
    title: "Software Developer Intern",
    period: "Jan — Jul 2017",
    bullets: [
      "Built a Complaint Management System.",
    ],
    tags: ["PHP", "JavaScript"],
  },
];
