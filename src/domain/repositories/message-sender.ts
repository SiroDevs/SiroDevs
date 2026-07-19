import type { ContactMessage } from "../entities/contact-message";

/**
 * Port for delivering a contact message. Infrastructure provides the
 * implementation (currently Nodemailer over Gmail) — swap it for Resend,
 * SES, or anything else without touching the use-case or the UI.
 */
export interface MessageSender {
  send(message: ContactMessage): Promise<void>;
}
