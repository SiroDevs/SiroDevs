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

/**
 * Per-app visual/copy config for the shared microsite components
 * (HeroSection, FeaturesGrid, GlowCard, BottomLinks, PrivacyPolicy).
 * One of these lives at `infrastructure/content/<app>/theme.ts`.
 */
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
  privacyPath: string; // route segment, e.g. "privacy-policy" or "sera-ya-faragha"
  privacyLabel: string; // link text, e.g. "Privacy Policy" or "Sera ya Faragha"
  privacyBackLabel: string; // e.g. "Back to" or "Rudi kwa"
  privacySubtitlePrefix: string; // e.g. "Privacy Policy for" or "Sera ya Faragha ya"
}
