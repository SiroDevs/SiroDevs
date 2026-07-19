import type { ContactMessage } from "@/domain/entities/contact-message";
import type { MessageSender } from "@/domain/repositories/message-sender";
import { ValidationError } from "../errors/validation-error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates a contact-form submission and hands it off to whichever
 * MessageSender infrastructure provides. Validation lives here — not in the
 * API route, not in the form — so the rule is enforced no matter what calls
 * this use-case in the future (e.g. a future public API).
 */
export class SendContactMessageUseCase {
  constructor(private readonly messageSender: MessageSender) {}

  async execute(input: ContactMessage): Promise<void> {
    this.validate(input);
    await this.messageSender.send(input);
  }

  private validate(input: ContactMessage): void {
    const { name, email, subject, message } = input;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      throw new ValidationError("All fields are required.");
    }

    if (!EMAIL_PATTERN.test(email)) {
      throw new ValidationError("Please enter a valid email address.");
    }
  }
}
