import type { AppFeature } from "@/domain/entities/app-entity";

export const features: AppFeature[] = [
  {
    id: 1,
    icon: "route",
    title: "Draw Routes On the Map",
    description:
      "Tap your start point, waypoints, and destination to draw a route directly on the map, then choose your sport and decide between a one-way trip or a round trip.",
  },
  {
    id: 2,
    icon: "save",
    title: "Save Routes for Later",
    description:
      "Give any route a name and description, then save it so it's ready to reuse whenever you want to head out again.",
  },
  {
    id: 3,
    icon: "schedule",
    title: "Build a Day-by-Day Plan",
    description:
      "Turn a saved route into a full schedule. Set your start date, average speed, and number of days, and YouPlot generates a timeline of waypoints, pit stops, and rest breaks, so you always know what to expect and when.",
  },
  {
    id: 4,
    icon: "activity",
    title: "Built for Every Outdoor Activity",
    description:
      "Whether you run, cycle, hike, or walk, YouPlot adapts your route and schedule to your sport and pace.",
  },
  {
    id: 5,
    icon: "offline",
    title: "Fully Offline, No Subscription",
    description:
      "All your routes and plans are saved on your device. No account required and no recurring fees, just open the app and start plotting.",
  },
];
