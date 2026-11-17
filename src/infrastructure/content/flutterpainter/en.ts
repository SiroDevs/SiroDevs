import {
  Bookmark,
  CloudDownload,
  History,
  Layers,
  ListChecks,
  MonitorPlay,
  Palette,
  PenLine,
} from "lucide-react";

const releasesUrl = "https://github.com/SiroDevs/FlutterPainter/releases/latest";

export const flutterPainterContent = {
  metadata: {
    title: "FlutterPainter | Siro Devs",
    description:
      "A desktop vector drawing app for making artwork and exporting it as Dart code. Draw with shapes and paths, organize layers, and create a reusable painter for Flutter.",
  },
  navigation: {
    links: [
      { href: "#screenshots", label: "The editor" },
      { href: "#features", label: "Features" },
      { href: "#workflow", label: "How it works" },
    ],
    action: { href: releasesUrl, label: "Download", external: true },
  },
  hero: {
    eyebrow: "A desktop drawing app for Flutter",
    title: "Draw artwork. Export it as Dart.",
    description:
      "FlutterPainter is a vector drawing app for making artwork and exporting it as Flutter-ready Dart code. Draw with shapes and paths, arrange the work on layers, then use the generated painter in your project.",
    primaryAction: {
      label: "DOWNLOAD FLUTTERPAINTER",
      href: releasesUrl,
      external: true,
    },
    secondaryAction: {
      label: "Explore the features",
      href: "#features",
    },
  },
  screenshots: {
    title: "From canvas to generated code.",
    description:
      "Draw and organize the artwork in the editor, then inspect the Dart painter and layer files before you use them.",
    items: [
      {
        title: "The drawing workspace",
        image: "/flutterpainter/editor.webp",
        alt: "FlutterPainter workspace with a rider illustration, shape tools, colour controls, and layers",
      },
      {
        title: "Dart code export",
        image: "/flutterpainter/dart-export.webp",
        alt: "FlutterPainter code editor showing generated Dart painter and layer files",
      },
    ],
  },
  features: {
    title: "A focused workspace for vector artwork.",
    description:
      "Build a drawing from individual shapes, keep the structure editable, and choose how the Dart code is organized.",
    items: [
      {
        icon: PenLine,
        title: "Draw with flexible tools",
        description:
          "Create rectangles, ellipses, lines, polygons, open paths, and smoothed freehand strokes.",
      },
      {
        icon: ListChecks,
        title: "Refine every shape",
        description:
          "Select one or many shapes, then move, resize, rotate, group, and edit path points.",
      },
      {
        icon: Layers,
        title: "Keep work organized",
        description:
          "Use layers and an expandable item tree to arrange drawings, groups, and their parts.",
      },
      {
        icon: Bookmark,
        title: "Trace with reference images",
        description:
          "Place an image on a layer, adjust it while drawing, and keep it with the project file.",
      },
      {
        icon: History,
        title: "Pick up where you left off",
        description:
          "Keep projects open in tabs with undo, redo, auto-save, and draft recovery.",
      },
      {
        icon: CloudDownload,
        title: "Export usable Dart code",
        description:
          "Generate a refactored set of files or one monolithic painter that uses dart:ui.",
      },
      {
        icon: Palette,
        title: "Make the workspace yours",
        description:
          "Choose light or dark themes and switch between minimal and advanced layouts.",
      },
      {
        icon: MonitorPlay,
        title: "Work in two languages",
        description:
          "Use the interface in English or Swahili on Linux, Windows, or macOS.",
      },
    ],
  },
  workflow: {
    title: "Make it, arrange it, use it in Flutter.",
    description:
      "The canvas uses a design box, and its coordinates become the drawing's Dart coordinates.",
    steps: [
      {
        title: "Create the artwork",
        description:
          "Draw shapes and paths on the canvas, or trace over a reference image.",
      },
      {
        title: "Arrange the design",
        description:
          "Group and name items, organize layers, and save the project as an editable .flp file.",
      },
      {
        title: "Export a painter",
        description:
          "Choose structured Dart files or one file, then call the generated painter from your Flutter app.",
      },
    ],
  },
  closing: {
    title: "Ready to make your next Flutter illustration?",
    description:
      "Download the latest release for Linux, Windows, or macOS from GitHub.",
    label: "DOWNLOAD FLUTTERPAINTER",
    href: releasesUrl,
  },
};
