import { NextResponse } from "next/server";
import { sendContactMessageUseCase } from "@/infrastructure/container";
import { ValidationError } from "@/application/errors/validation-error";
import type { ContactMessage } from "@/domain/entities/contact-message";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactMessage;

    await sendContactMessageUseCase.execute(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again shortly." },
      { status: 500 }
    );
  }
}
