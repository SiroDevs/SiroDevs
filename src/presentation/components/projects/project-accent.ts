export type ProjectAccent = "brand" | "flutter";

export const projectAccentStyles: Record<
  ProjectAccent,
  {
    text: string;
    hoverText: string;
    hoverBorder: string;
    action: string;
    iconSurface: string;
  }
> = {
  brand: {
    text: "text-brand",
    hoverText: "hover:text-brand",
    hoverBorder: "hover:border-brand",
    action: "border-brand bg-brand hover:bg-brand-dark",
    iconSurface: "border-brand/20 bg-brand/10 text-brand",
  },
  flutter: {
    text: "text-flutter",
    hoverText: "hover:text-flutter",
    hoverBorder: "hover:border-flutter",
    action: "border-flutter bg-flutter hover:bg-flutter-dark",
    iconSurface: "border-flutter/20 bg-flutter/10 text-flutter",
  },
};
