import type { DonationAppId } from "@/domain/entities/donation";

interface DonationAppConfig {
  secretKeyEnvVar: string;
  callbackUrl: string;
}

const BASE_URL = "https://sirodevs.vercel.app";

export const DONATION_APPS: Record<DonationAppId, DonationAppConfig> = {
  swahilib: {
    secretKeyEnvVar: "PAYSTACK_SECRET_KEY_SWAHILIB",
    callbackUrl: `${BASE_URL}/SwahiLib/donation/callback`,
  },
  songlib: {
    secretKeyEnvVar: "PAYSTACK_SECRET_KEY_SONGLIB",
    callbackUrl: `${BASE_URL}/SongLib/donation/callback`,
  },
  biblelib: {
    secretKeyEnvVar: "PAYSTACK_SECRET_KEY_BIBLELIB",
    callbackUrl: `${BASE_URL}/BibleLib/donation/callback`,
  },
};
