export const DONATION_APP_IDS = ["swahilib", "songlib", "biblelib"] as const;

export type DonationAppId = (typeof DONATION_APP_IDS)[number];

export interface DonationInitRequest {
  email: string;
  amount: number;
  appId: DonationAppId;
}

export interface DonationInitResult {
  authorizationUrl: string;
  accessCode: string;
  reference: string;
}
