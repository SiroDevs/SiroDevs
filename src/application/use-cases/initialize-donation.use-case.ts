import {
  DONATION_APP_IDS,
  type DonationInitRequest,
  type DonationInitResult,
} from "@/domain/entities/donation";
import type { DonationGateway } from "@/domain/repositories/donation-gateway";
import { ValidationError } from "../errors/validation-error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Smallest currency unit (matches Paystack's convention, e.g. kobo/cents).
// Adjust these to sane bounds for your currency/use case.
const MIN_AMOUNT = 100;
const MAX_AMOUNT = 500_000_00;

/**
 * Validates a donation request and hands it to whichever DonationGateway
 * infrastructure provides. Validation lives here — not in each app's route
 * handler — so every /donation/<app> endpoint enforces the same rules no
 * matter how many apps get added later.
 */
export class InitializeDonationUseCase {
  constructor(private readonly gateway: DonationGateway) {}

  async execute(input: DonationInitRequest): Promise<DonationInitResult> {
    this.validate(input);
    return this.gateway.initialize(input);
  }

  private validate(input: DonationInitRequest): void {
    const { email, amount, appId } = input;

    if (!email?.trim() || !EMAIL_PATTERN.test(email)) {
      throw new ValidationError("Please provide a valid email address.");
    }

    // Belt-and-suspenders: route handlers hardcode a literal, valid appId,
    // but the use-case shouldn't blindly trust its caller either.
    if (!DONATION_APP_IDS.includes(appId)) {
      throw new ValidationError("Unknown app.");
    }

    if (typeof amount !== "number" || !Number.isFinite(amount) || amount < MIN_AMOUNT) {
      throw new ValidationError("Amount is below the allowed minimum.");
    }

    if (amount > MAX_AMOUNT) {
      throw new ValidationError("Amount exceeds the allowed maximum.");
    }
  }
}
