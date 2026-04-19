"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/primitives/Button";
import { WhatsAppButton } from "@/components/shell/WhatsAppButton";

interface Props {
  locale: "en" | "es";
  whatsappLabel: string;
}

const fieldClass =
  "w-full border-b border-ink/20 bg-transparent py-3 text-[1rem] text-ink placeholder:text-ink-muted/60 focus:border-navy-900 focus:outline-none";
const labelClass = "eyebrow text-ink-muted";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton({ locale }: { locale: "en" | "es" }) {
  const { pending } = useFormStatus();
  const sending = locale === "es" ? "Enviando…" : "Sending…";
  const send = locale === "es" ? "Enviar mensaje" : "Send message";
  return (
    <Button type="submit" variant="primary" disabled={pending}>
      {pending ? sending : send}
    </Button>
  );
}

export function ContactForm({ locale, whatsappLabel }: Props) {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form className="space-y-10 md:col-span-7" action={formAction} noValidate>
      <input type="hidden" name="locale" value={locale} />
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{locale === "es" ? "Nombre" : "Name"}</span>
          <input type="text" name="name" required className={`${fieldClass} mt-3`} />
        </label>
        <label className="block">
          <span className={labelClass}>
            {locale === "es" ? "Firma / Organización" : "Firm / Organization"}
          </span>
          <input type="text" name="firm" className={`${fieldClass} mt-3`} />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>{locale === "es" ? "Correo" : "Email"}</span>
          <input type="email" name="email" required className={`${fieldClass} mt-3`} />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>
            {locale === "es" ? "Naturaleza de la consulta" : "Nature of inquiry"}
          </span>
          <input type="text" name="inquiry" className={`${fieldClass} mt-3`} />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>{locale === "es" ? "Mensaje" : "Message"}</span>
          <textarea
            name="message"
            rows={5}
            className={`${fieldClass} mt-3 resize-none`}
          />
        </label>
      </div>

      {state.status === "error" && state.message && (
        <p
          role="alert"
          aria-live="polite"
          className="text-[0.9375rem] text-red-700"
        >
          {state.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton locale={locale} />
        <WhatsAppButton label={whatsappLabel} variant="cta" />
      </div>
    </form>
  );
}
