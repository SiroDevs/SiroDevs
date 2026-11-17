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
    title: "Road Bash | Siro Devs",
    description:
      "Play Road Bash, a pseudo-3D motorcycle racing game built with Flutter and Flame. Race through the city and suburbs, keeping left on Kenyan roads.",
  },
  hero: {
    eyebrow: "Flutter · Flame · racing game",
    title: "Keep left. Hold your line. Beat your rivals.",
    description:
      "A pseudo-3D motorcycle racer inspired by the 1991 classic Road Rash. Ride through city streets and the suburbs, keep left like we do in Kenya, and race for the line.",
    note: "Work in progress: controls and interface are still being polished.",
    image: "/roadbash/race.webp",
    imageAlt: "Road Bash race menu showing a rider on a city road at sunset",
    primaryAction: {
      label: "PLAY NOW ONLINE",
      href: "https://roadbash.sirodevs.com",
      external: true,
    },
    secondaryAction: {
      label: "See the screenshots",
      href: "#screenshots",
    },
  },
  screenshots: {
    title: "The race is only part of the story.",
    description:
      "Check the leaderboard, follow player activity, and see how your races add up.",
    items: [
      {
        title: "Leaderboard",
        image: "/roadbash/leaderboard.webp",
        alt: "Road Bash leaderboard with player names, games played, and wins",
      },
      {
        title: "Player and race stats",
        image: "/roadbash/stats.webp",
        alt: "Road Bash stats showing visitors, players, games, and activity charts",
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
        title: "Two tracks, three laps",
        description:
          "Take on The City or The Suburbs, with three laps to put distance between you and the pack.",
      },
      {
        icon: Footprints,
        title: "Keep left",
        description:
          "Ride on the left side of the road, just like we do in Kenya.",
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
        icon: Languages,
        title: "English and Kiswahili",
        description:
          "Switch the game language from the Reception screen.",
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
    href: "https://roadbash.sirodevs.com",
  },
};
