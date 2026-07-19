/**
 * Thrown by use-cases when input fails business validation. Kept distinct
 * from unexpected/infrastructure errors so callers (e.g. the API route) can
 * map it to a 400 instead of a 500.
 */
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
