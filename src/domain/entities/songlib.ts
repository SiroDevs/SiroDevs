/**
 * Entities for the embedded SongLib section (/songlib). SongLib started
 * life as its own Next.js app; these mirror its original data shapes so the
 * ported content/components need no restructuring.
 */

export interface SongLibAppInfo {
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

export interface SongLibFeature {
  id: number;
  title: string;
  description: string;
}

export interface SongLibPrivacyText {
  id: number;
  title: string;
  desc: string;
}
