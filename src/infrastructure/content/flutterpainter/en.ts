import {
  Bookmark,
  Box,
  CloudDownload,
  History,
  Layers,
  ListChecks,
  Palette,
  PenLine,
} from "lucide-react";

export const flutterPainterContent = {
  metadata: {
    title: "FlutterPainter — Draw artwork. Export it as Dart.",
    description:
      "FlutterPainter is a desktop vector drawing app for creating editable artwork, turning layered shapes into 3D objects, and exporting Flutter-ready Dart code.",
  },
  navigation: {
    links: [
      { href: "/flutterpainter#screenshots", label: "The editor" },
      { href: "/flutterpainter#features", label: "Features" },
      { href: "/flutterpainter/how-it-works", label: "How it works" },
    ],
    action: { href: "/flutterpainter#download", label: "Download" },
  },
  hero: {
    eyebrow: "A desktop drawing app for Flutter",
    title: "FlutterPainter: Draw artwork. Export it as Dart.",
    description:
      "Draw editable artwork, turn layered shapes into 3D objects, and export the result as Flutter-ready Dart code.",
    primaryAction: {
      label: "DOWNLOAD FLUTTERPAINTER",
      href: "#download",
    },
    secondaryAction: {
      label: "How it works",
      href: "/flutterpainter/how-it-works",
    },
  },
  screenshots: {
    title: "From canvas to generated code.",
    description:
      "Draw and organize the artwork in the editor, then inspect the Dart painter and layer files before you use them.",
    items: [
      {
        title: "The drawing workspace",
        image: "/flutterpainter/dart-export.png",
        alt: "FlutterPainter workspace with a rider illustration, shape tools, colour controls, and layers",
      },
      {
        title: "Dart code export",
        image: "/flutterpainter/editor.png",
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
        icon: Box,
        title: "Create 3D objects",
        description:
          "Convert a layer into a 3D model, then adjust each shape’s thickness and depth.",
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
