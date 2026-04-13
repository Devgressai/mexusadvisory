import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  label: string;
  variant?: "header" | "cta";
  tone?: "paper" | "navy";
  className?: string;
}

export function WhatsAppButton({
  label,
  variant = "header",
  tone = "paper",
  className,
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${site.whatsappNumber}`;
  const base =
    "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.8125rem] font-medium tracking-[0.01em] transition-colors duration-300";
  const toneClass =
    tone === "navy"
      ? "border-paper/25 text-paper hover:border-paper/60"
      : "border-ink/15 text-ink hover:border-navy-900";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — ${site.whatsappDisplay}`}
      className={cn(base, toneClass, className)}
    >
      <MessageCircle size={15} strokeWidth={1.75} aria-hidden />
      <span className={cn(variant === "header" && "hidden md:inline")}>{label}</span>
    </a>
  );
}
