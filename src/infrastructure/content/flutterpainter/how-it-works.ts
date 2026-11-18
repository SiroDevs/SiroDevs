export const flutterPainterHowItWorksContent = {
  hero: {
    eyebrow: "A practical guide",
    title: "How FlutterPainter works",
    description:
      "Draw and organize editable artwork, turn a layer into a 3D object, then export a Dart painter for your Flutter app.",
    primaryAction: {
      label: "Create a 3D object",
      href: "#create-3d",
    },
    secondaryAction: {
      label: "Back to FlutterPainter",
      href: "/flutterpainter",
    },
  },
  workflow: {
    title: "From canvas to Flutter code.",
    description:
      "Build artwork from shapes, organize it in layers, then export a painter that uses the canvas design-box coordinates.",
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
  threeD: {
    title: "Create a 3D object",
    description:
      "Start with regular shapes on one layer. Convert that layer, then set the extrusion and position of each shape in the 3D inspector.",
    steps: [
      {
        title: "Draw and group the parts",
        description:
          "Draw the object's shapes on a layer. Group shapes that should move together as one part.",
      },
      {
        title: "Convert the layer",
        description:
          "Select the layer in the Layers panel, open the Layer tab, and choose Make 3D layer.",
      },
      {
        title: "Preview the model",
        description:
          "In the lower-right inspector, open the 3D tab and turn on Preview on canvas.",
      },
      {
        title: "Extrude and position shapes",
        description:
          "Select a shape and increase Thickness to extrude it. Adjust Depth to place it farther forward or back.",
      },
      {
        title: "Adjust the view",
        description:
          "Inspect Straight, Left, and Right views, then adjust Turn, Tilt, and Zoom. Add round components from the Tyres section.",
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
  closing: {
    title: "Ready to make your own?",
    description:
      "Download FlutterPainter and start with an editable drawing on the canvas.",
    label: "Download FlutterPainter",
    href: "/flutterpainter#download",
  },
};
