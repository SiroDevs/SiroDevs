export interface AppInfo {
  appName: string;
  /** Lowercase URL segment for this app's microsite, e.g. "songlib". */
  slug: string;
  appIcon: string;
  tagline: string;
  callout: string;
  description: string;
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
  icon?: string;
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
  ctaGradient: string;
  /** Short caption shown under the download button, e.g. "Android & iOS". */
  availabilityText: string;
  glowClassName: string;
  iconColor: string;
  showFork: boolean;
}
