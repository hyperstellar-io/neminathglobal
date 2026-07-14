import { Resend } from "resend";

// Server-only — never imported by client code (lives under src/lib/server).
const NOTIFY_EMAIL = "archit@neminathglobal.com";
const FROM_EMAIL = "Neminath Global <noreply@neminathglobal.com>";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(apiKey);
}

export async function sendContactNotification(data: {
  name: string;
  company: string;
  email: string;
  country?: string;
  phone?: string;
  message: string;
}) {
  const resend = getResend();
  await resend.emails.send({
    from: FROM_EMAIL,
    to: NOTIFY_EMAIL,
    replyTo: data.email,
    subject: `New contact form enquiry from ${data.name} (${data.company})`,
    text: [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Country: ${data.country ?? ""}`,
      `Phone: ${data.phone ?? ""}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });
}

export async function sendCatalogueLeadNotification(email: string) {
  const resend = getResend();
  await resend.emails.send({
    from: FROM_EMAIL,
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: "New catalogue download request",
    text: `Email: ${email}`,
  });
}
