import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "info@dreamchi.org",
        pass: process.env.CONTACT_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Dream Rentals Website" <info@dreamchi.org>`,
      to: "info@dreamchi.org",
      replyTo: email,
      subject: `[Dream Rentals] ${subject} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0a0a0a;">New inquiry from thedreamrentals.com</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Name</td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Phone</td><td style="padding:8px 0;">${phone || "N/A"}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Subject</td><td style="padding:8px 0;">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0;">
          <p style="color:#555;line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
        </div>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
