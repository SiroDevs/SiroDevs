import {
  CloudDownload,
  Footprints,
  Gamepad2,
  Languages,
  ListMusic,
  Route,
  Trophy,
  Users,
} from "lucide-react";

export const roadbashContent = {
  metadata: {
    title: "RoadBash — Motorcycle Racing Game inspired by the classic Road Rash | SiroDevs",
    description:
      "RoadBash is an online motorcycle racing game inspired by the classic Road RasSports. Race city and suburban tracks, compete against rivals, and keep left on Kenyan roads.",
  },
  hero: {
    eyebrow: "Flutter · Flame · racing game",
    title: "RoadBash: Keep left. Avoid police. Beat your rivals.",
    description:
      "A pseudo-3D motorcycle racer inspired by the 1991 classic Road Rash. Ride through city streets and the suburbs, keep left like we do in Kenya, avoid the police and race for the finish line.",
    note: "Work in progress: controls and interface are still being polished.",
    image: "/roadbash/roadbash1.png",
    imageAlt: "Road Bash scene selection showing The City, a rider, and the Start Ride action",
    primaryAction: {
      label: "PLAY NOW ONLINE",
      href: "https://roadbash.web.app",
      external: true,
    },
    secondaryAction: {
      label: "See the screenshots",
      href: "#screenshots",
    },
  },
  screenshots: {
    title: "Get into the race.",
    description:
      "Ride through the city streets, line up beside your rivals, and get off the line cleanly.",
    items: [
      {
        title: "City race",
        image: "/roadbash/roadbash2.png",
        alt: "First-person city race with rival riders, traffic, speed dials, pedals, and the item bar",
      },
      {
        title: "Race start",
        image: "/roadbash/roadbash3.png",
        alt: "Road Bash start countdown with riders on a straight road and on-screen gas pedals",
      },
    ],
  },
  features: {
    eyebrow: "The ride",
    title: "Arcade racing with a Kenyan point of view.",
    description:
      "Race through bending roads, learn each track, and keep an eye on the riders around you.",
    items: [
      {
        icon: Route,
        title: "Five tracks, for your taste",
        description:
          "Take on The City, The Suburbs, Thika Road, Jungle or the Dirt Road.",
      },
      {
        icon: Gamepad2,
        title: "Race with rivals",
        description:
          "Watch your race position and lap count, then see your results at the finish.",
      },
      {
        icon: ListMusic,
        title: "Make the bike yours",
        description:
          "Choose an engine sound and mix music and effects to suit your ride.",
      },
      {
        icon: Users,
        title: "Bring your rider name",
        description:
          "Create a player account, track your results, and compare times on the leaderboard.",
      },
      {
        icon: Trophy,
        title: "See the bigger race",
        description:
          "Check player and visitor stats, who is online, the activity chart, or leave a suggestion.",
      },
      {
        icon: CloudDownload,
        title: "Play across platforms",
        description:
          "Road Bash runs on Android, iOS, web, Windows, Linux, and macOS.",
      },
    ],
  },
  controls: {
    title: "Keyboard, touch, or tilt.",
    description:
      "Pick the controls that suit your device. Phones and tablets can steer by tilting.",
    items: [
      {
        icon: Gamepad2,
        title: "Throttle and brake",
        description:
          "Press Up or W to accelerate and Down or S to brake. Touch devices use the on-screen pedals.",
      },
      {
        icon: Route,
        title: "Steer",
        description:
          "Use Left and Right or A and D on a keyboard, or tilt your phone like a steering wheel.",
      },
      {
        icon: Users,
        title: "Pause and mute",
        description:
          "Press Space or use the pause and speaker buttons during a race.",
      },
      {
        icon: Footprints,
        title: "Use on-screen arrows",
        description:
          "Turn on Use Screentouch in Controls to steer with arrows instead of tilt.",
      },
    ],
  },
  closing: {
    title: "Ready to take the next lap?",
    description:
      "Choose a track, hold your line, and see where you land on the board.",
    label: "PLAY NOW ONLINE",
    href: "https://roadbash.web.app",
  },
};
