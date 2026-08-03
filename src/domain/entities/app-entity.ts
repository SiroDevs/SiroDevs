export interface AppInfo {
  appName: string;
  appIcon: string;
  tagline: string;
  callout: string;
  description: string;
  privacyStatement: string;
}

export interface SongLibBook {
  bookId: number;
  title: string;
  subTitle: string;
  songs: number;
  enabled: boolean;
}

export interface AppFeature {
  id: number;
  title: string;
  description: string;
}

export interface PrivacyText {
  id: number;
  title: string;
  desc: string;
}

export interface MicrositeTheme {
  heroTexts: string[];
  heroImage: string;
  heroSubheading: string;
  ctaGradient: string; // tailwind gradient stops, e.g. "from-red-600 to-red-900"
  ctaLabel?: string; // defaults to `Get ${appName} Today`
  availabilityText: string;
  glowClassName: string; // tailwind bg/text classes for the feature GlowCards
  iconColor: string;
  showFork: boolean;
}
