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
      { href: "#faq", label: "FAQ" },
    ],
    action: { href: "#download", label: "Download" },
  },
  hero: {
    eyebrow: "A desktop drawing app for Flutter",
    title: "Draw artwork. Export it as Dart.",
    description:
      "FlutterPainter is a vector drawing app for making artwork and exporting it as Flutter-ready Dart code. Draw with shapes and paths, arrange the work on layers, then use the generated painter in your project.",
    primaryAction: {
      label: "DOWNLOAD FLUTTERPAINTER",
      href: "#download",
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
  faq: {
    title: "Questions before you download?",
    description: "A few details about the desktop app and its Dart exports.",
    items: [
      {
        question: "Which operating systems are supported?",
        answer:
          "FlutterPainter has desktop releases for Windows x64, macOS for Intel and Apple Silicon, and Linux for x64 and ARM64.",
      },
      {
        question: "Do I need Flutter installed to draw?",
        answer:
          "No. FlutterPainter runs as a desktop drawing app. You use Flutter when you add the exported Dart painter to your own Flutter project.",
      },
      {
        question: "What does the Dart export include?",
        answer:
          "Export either a refactored set of Dart files for the painter and its layers, or one monolithic Dart file. Both use dart:ui.",
      },
      {
        question: "Does the export include animation?",
        answer:
          "The export describes static artwork. Add animation, rotation, or other runtime transforms around the painter in your Flutter app.",
      },
    ],
  },
  download: {
    title: "Get FlutterPainter for your desktop.",
    description:
      "Choose a build for Windows, macOS, or Linux. Packages are available for the supported desktop architectures.",
    labels: {
      recommended: "Your OS",
      otherDownloads: "Other downloads",
      selectPackage: "Select a download…",
      windowsTitle: "Windows",
      windowsNote: "64-bit installer, with a portable ZIP under other downloads.",
      windowsArchitecture: "64-bit",
      macosTitle: "macOS",
      macosNote: "For Apple Silicon and Intel Macs.",
      appleSilicon: "Apple Silicon",
      intelMac: "Intel Mac",
      linuxTitle: "Linux",
      linuxX64Note: "Builds for 64-bit Intel/AMD (x64).",
      linuxArm64Note: "Builds for ARM64 (aarch64).",
      linuxOtherArchitectureNote: "Using another CPU? Pick it under Other downloads.",
      windowsButton: "Windows",
      macButton: "Mac",
      linuxDebButton: "Debian/Ubuntu",
      linuxRpmButton: "Red Hat/Fedora",
      portableNoInstall: "Portable, no install",
      formats: {
        installer: "Installer",
        portable: "Portable ZIP",
        dmg: "DMG",
        deb: "DEB package",
        rpm: "RPM package",
        tarball: "Tarball",
      },
      architecture: { x64: "x64", arm64: "ARM64" },
      releaseNotes: "Release notes",
      checksums: "SHA256 checksums",
      version: "Version",
      supportPrompt: "Need help installing?",
      emailSupport: "Email me",
    },
  },
};
