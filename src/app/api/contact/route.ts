import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: `${body.name} <onboarding@resend.dev>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || "",
      subject: `New message from ${body.name}`,
      html: `
        <div style="font-family:Arial;padding:10px">
          <h2>New Message</h2>
          <p>${body.message}</p>
          <p>From: <b>${body.name}</b> (${body.email})</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Resend error:", error);
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
