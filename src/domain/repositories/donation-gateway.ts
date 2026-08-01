import type { DonationInitRequest, DonationInitResult } from "../entities/donation";

export interface DonationGateway {
  initialize(input: DonationInitRequest): Promise<DonationInitResult>;
}
