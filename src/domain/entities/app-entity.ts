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
