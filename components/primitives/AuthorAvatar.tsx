import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Portraits live at /public/people/<slug>.webp. Only slugs listed here
 * have a file on disk — other slugs fall back to typographic initials.
 */
const PORTRAIT_BY_SLUG: Record<string, string> = {
  "mace-miller": "/people/mace-miller.webp",
  "darilu-cartagena": "/people/darilu-cartagena.webp",
  "jeremy-anderson": "/people/jeremy-anderson.webp",
  "roberto-ortigoza": "/people/roberto-ortigoza.webp",
  "federico-vielledent": "/people/federico-vielledent.webp",
};

export function getPortrait(slug?: string): string | undefined {
  if (!slug) return undefined;
  return PORTRAIT_BY_SLUG[slug];
}

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

interface AuthorAvatarProps {
  name: string;
  personSlug?: string;
  /** Pixel size of the square avatar. Defaults to 56. */
  size?: number;
  /** Optional tone — affects the initials fallback background. */
  tone?: "paper" | "navy";
  className?: string;
}

export function AuthorAvatar({
  name,
  personSlug,
  size = 56,
  tone = "paper",
  className,
}: AuthorAvatarProps) {
  const src = getPortrait(personSlug);
  const initials = initialsOf(name);

  if (src) {
    return (
      <div
        className={cn(
          "relative aspect-square overflow-hidden rounded-full ring-1 ring-rule/60",
          className,
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={name}
          fill
          sizes={`${size}px`}
          className="object-cover grayscale-[0.15]"
        />
      </div>
    );
  }

  return (
    <div
      aria-label={name}
      className={cn(
        "flex aspect-square items-center justify-center rounded-full ring-1",
        tone === "navy"
          ? "bg-navy-900/40 text-paper/85 ring-paper/20"
          : "bg-bone text-ink-muted/70 ring-rule",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <span
        className="font-display tracking-[0.02em]"
        style={{ fontSize: Math.max(12, Math.floor(size * 0.38)) }}
      >
        {initials}
      </span>
    </div>
  );
}
