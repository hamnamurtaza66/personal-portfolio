import { NextResponse } from "next/server";
import { Resend } from "resend";

// Prevent Next.js from trying to statically optimize this API route
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

// Initialize Resend with your API key (must be set in Vercel → Project Settings → Environment Variables)
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // Send plain text email (safe for Vercel deployment)
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject,
      text: `
        ${subject}

        Thank you for contacting us!

        New message submitted:
        ${message}
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
