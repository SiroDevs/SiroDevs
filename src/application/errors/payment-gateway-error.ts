/**
 * Thrown when the underlying payment processor (Paystack) can't be reached
 * or rejects a request. Kept distinct from ValidationError so callers (e.g.
 * an API route) can map it to a 502 instead of a 400.
 */
export class PaymentGatewayError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PaymentGatewayError";
  }
}
