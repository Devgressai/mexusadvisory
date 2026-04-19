"use server";

import { Resend } from "resend";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

interface SubmitInput {
  name: string;
  firm: string;
  email: string;
  inquiry: string;
  message: string;
  locale: "en" | "es";
  honeypot: string;
}

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const input: SubmitInput = {
    name: String(formData.get("name") ?? "").trim(),
    firm: String(formData.get("firm") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    inquiry: String(formData.get("inquiry") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    locale: (String(formData.get("locale") ?? "en") === "es" ? "es" : "en"),
    honeypot: String(formData.get("company") ?? "").trim(),
  };

  const errorMsg = (en: string, es: string) =>
    input.locale === "es" ? es : en;

  if (input.honeypot) {
    return { status: "success" };
  }

  if (!input.name || !input.email) {
    return {
      status: "error",
      message: errorMsg(
        "Please provide your name and email.",
        "Por favor proporcione su nombre y correo.",
      ),
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    return {
      status: "error",
      message: errorMsg(
        "Please enter a valid email address.",
        "Por favor ingrese un correo electrónico válido.",
      ),
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "dcartagena@mexusadvisory.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Mexus Advisory <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[contact] Missing RESEND_API_KEY");
    return {
      status: "error",
      message: errorMsg(
        "Email service is not configured. Please try again later.",
        "El servicio de correo no está configurado. Intente más tarde.",
      ),
    };
  }

  const resend = new Resend(apiKey);

  const subject = `Mexus Advisory — ${input.inquiry || "New inquiry"} (${input.name})`;

  const textBody = [
    `Name: ${input.name}`,
    `Firm / Organization: ${input.firm || "—"}`,
    `Email: ${input.email}`,
    `Nature of inquiry: ${input.inquiry || "—"}`,
    `Locale: ${input.locale}`,
    "",
    "Message:",
    input.message || "—",
  ].join("\n");

  const htmlBody = `
    <div style="font-family:Georgia,serif;color:#0B1F3A;line-height:1.6">
      <h2 style="margin:0 0 16px">New contact inquiry</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#555">Name</td><td>${escapeHtml(input.name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#555">Firm / Organization</td><td>${escapeHtml(input.firm) || "—"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#555">Email</td><td><a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#555">Nature of inquiry</td><td>${escapeHtml(input.inquiry) || "—"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#555">Locale</td><td>${input.locale}</td></tr>
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap">${escapeHtml(input.message) || "—"}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: input.email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return {
        status: "error",
        message: errorMsg(
          "Something went wrong sending your message. Please try again.",
          "Algo salió mal al enviar su mensaje. Intente de nuevo.",
        ),
      };
    }

    return {
      status: "success",
      message: errorMsg(
        "Thank you — your message has been sent. We will be in touch shortly.",
        "Gracias — su mensaje ha sido enviado. Nos pondremos en contacto pronto.",
      ),
    };
  } catch (err) {
    console.error("[contact] Unexpected error", err);
    return {
      status: "error",
      message: errorMsg(
        "Something went wrong sending your message. Please try again.",
        "Algo salió mal al enviar su mensaje. Intente de nuevo.",
      ),
    };
  }
}
