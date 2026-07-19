import nodemailer from "nodemailer";
import type { ContactMessage } from "@/domain/entities/contact-message";
import type { MessageSender } from "@/domain/repositories/message-sender";
import { site } from "@/config/site";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Delivers contact-form submissions straight to Siro's inbox via Gmail —
 * no third-party form service, no mailto: popup. Reads credentials from
 * env vars at send time, so a missing config fails loudly and specifically
 * rather than as a generic 500.
 *
 * Required env vars:
 *  - GMAIL_USER: the sending Gmail address
 *  - GMAIL_APP_PASSWORD: a Google Account App Password (not the login password)
 */
export class NodemailerMessageSender implements MessageSender {
  async send(message: ContactMessage): Promise<void> {
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;

    if (!user || !pass) {
      throw new Error(
        "Email service is not configured: missing GMAIL_USER or GMAIL_APP_PASSWORD."
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const { name, email, subject, message: body } = message;

    await transporter.sendMail({
      from: `"Siro Portfolio" <${user}>`,
      to: site.email,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${body}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(body).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });
  }
}
