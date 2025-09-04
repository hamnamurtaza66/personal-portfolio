import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure dynamic API route
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY ?? "");
const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

// POST handler
export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject,
      text: `
        Subject: ${subject}

        New message:
        ${message}

        Reply to: ${email}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// GET handler
export async function GET() {
  return NextResponse.json({ status: "API is working ✅" });
}
