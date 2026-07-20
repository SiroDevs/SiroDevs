import type { AppFeature } from "@/domain/entities/app-entity";

export const features: AppFeature[] = [
  {
    id: 1,
    title: "Plot your route your way",
    description:
      "Draw routes directly on the map by tapping your start point, waypoints, and destination. Choose your sport, decide between a one-way trip or a round trip, and save your route with a name and description for future use.",
  },
  {
    id: 2,
    title: "Build a detailed activity plan",
    description:
      "Turn any saved route into a day-by-day schedule. Set your start date, average speed, and number of days, and YouPlot automatically generates a full event timeline — placing waypoints, pit stops, and rest breaks across your journey so you always know what to expect and when",
  },
  {
    id: 3,
    title: "Fully offline, no subscription",
    description:
      "All your routes and plans are saved on your device. No account required, no recurring fees — just open the app and start plotting your routes and then plan your activities.",
  },
];
