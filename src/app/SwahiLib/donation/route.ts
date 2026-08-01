import { NextResponse } from "next/server";
import { initializeDonationUseCase } from "@/infrastructure/container";
import { ValidationError } from "@/application/errors/validation-error";
import { PaymentGatewayError } from "@/application/errors/payment-gateway-error";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await initializeDonationUseCase.execute({
      email: body?.email,
      amount: body?.amount,
      appId: "swahilib",
    });

    return NextResponse.json({
      status: true,
      message: "Authorization URL created",
      data: {
        authorization_url: result.authorizationUrl,
        access_code: result.accessCode,
        reference: result.reference,
      },
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ status: false, message: error.message }, { status: 400 });
    }

    if (error instanceof PaymentGatewayError) {
      return NextResponse.json({ status: false, message: error.message }, { status: 502 });
    }

    console.error("Donation initialize error (swahilib):", error);
    return NextResponse.json(
      { status: false, message: "Could not start the donation. Please try again shortly." },
      { status: 500 }
    );
  }
}
