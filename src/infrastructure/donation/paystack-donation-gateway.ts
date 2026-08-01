import type { DonationGateway } from "@/domain/repositories/donation-gateway";
import type { DonationInitRequest, DonationInitResult } from "@/domain/entities/donation";
import { PaymentGatewayError } from "@/application/errors/payment-gateway-error";
import { DONATION_APPS } from "./app-registry";

const PAYSTACK_INITIALIZE_URL = "https://api.paystack.co/transaction/initialize";

/**
 * Talks to Paystack with the calling app's secret key, which lives only
 * here — as a server-side env var, never sent to or stored by any client
 * app. Each app in DONATION_APPS has its own separate Paystack account/key
 * (see infrastructure/donation/app-registry.ts), so this looks the right
 * one up per request rather than reading one fixed env var.
 */
export class PaystackDonationGateway implements DonationGateway {
  async initialize(input: DonationInitRequest): Promise<DonationInitResult> {
    const { email, amount, appId } = input;
    const { secretKeyEnvVar, callbackUrl } = DONATION_APPS[appId];

    const secretKey = process.env[secretKeyEnvVar];
    if (!secretKey) {
      throw new Error(`Payment service is not configured: missing ${secretKeyEnvVar}.`);
    }

    let response: Response;
    try {
      response = await fetch(PAYSTACK_INITIALIZE_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount,
          callback_url: callbackUrl,
          metadata: {
            custom_fields: [
              { display_name: "App", variable_name: "app_id", value: appId },
            ],
          },
        }),
      });
    } catch (error) {
      console.error(`Paystack request failed (${appId}):`, error);
      throw new PaymentGatewayError("Unable to reach the payment provider.");
    }

    const data = await response.json();

    if (!response.ok || !data?.status) {
      console.error(`Paystack initialize rejected (${appId}):`, data);
      throw new PaymentGatewayError(data?.message ?? "Payment provider rejected the request.");
    }

    return {
      authorizationUrl: data.data.authorization_url,
      accessCode: data.data.access_code,
      reference: data.data.reference,
    };
  }
}
