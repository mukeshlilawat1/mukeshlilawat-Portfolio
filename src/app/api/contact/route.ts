import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    // Debugging env variables
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS:", process.env.SMTP_PASS ? "exists" : "missing");
    console.log("CONTACT_RECEIVER_EMAIL:", process.env.CONTACT_RECEIVER_EMAIL);

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // must match HostAsia SSL hostname
      port: Number(process.env.SMTP_PORT), // 465
      secure: true, // true for 465 (SSL)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // ONLY if SSL error persists (testing), remove in production
      },
    });

    const mailOptions = {
      from: `"${body.name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New message from ${body.name}`,
      text: `${body.message}\nFrom: ${body.name} - ${body.email}`,
      html: `<p>${body.message}</p><p>From: ${body.name} - ${body.email}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent Successfully" }, { status: 200 });
  } catch (error) {
    console.error("Mail send error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
