import type { AppFeature } from "@/domain/entities/app-entity";

export const features: AppFeature[] = [
  {
    id: 1,
    icon: "route",
    title: "Draw Routes on the Map",
    description: "Tap your start, waypoints, and destination to plot a route.",
  },
  {
    id: 2,
    icon: "save",
    title: "Save for Later",
    description: "Name and save any route, ready to reuse anytime.",
  },
  {
    id: 3,
    icon: "schedule",
    title: "Day-by-Day Plans",
    description: "Turn a route into a timeline of stops and rest breaks.",
  },
  {
    id: 4,
    icon: "activity",
    title: "Every Outdoor Activity",
    description: "Run, cycle, hike, or walk, Youplot adapts to your pace.",
  },
  {
    id: 5,
    icon: "offline",
    title: "Offline, No Subscription",
    description: "Routes are saved on your device, no account needed.",
  },
];
