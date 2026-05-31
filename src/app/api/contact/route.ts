import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import AppointmentEmail from "@/emails/AppointmentEmail";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    // Debug — will show in terminal
    console.log("API Key exists:", !!apiKey);
    console.log("API Key prefix:", apiKey?.substring(0, 6));
    console.log("Contact email:", contactEmail);

    if (!apiKey) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, phone, service, date, time, insurance, message } = body;

    if (!name || !email || !phone || !service || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [contactEmail as string],
      replyTo: email,
      subject: `New Appointment — ${name} (${service})`,
      react: AppointmentEmail({ name, email, phone, service, date, time, insurance, message }),
    });

    if (error) {
      console.error("Resend error full:", JSON.stringify(error, null, 2));
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Email sent successfully:", data?.id);
    return NextResponse.json({ success: true, id: data?.id });

  } catch (err) {
    console.error("Caught error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}