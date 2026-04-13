import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Tone = "paper" | "navy";

interface BaseProps {
  variant?: Variant;
  tone?: Tone;
  className?: string;
  icon?: ReactNode;
}

function buttonClasses(variant: Variant, tone: Tone): string {
  const base =
    "group relative inline-flex items-center justify-center gap-3 rounded-[2px] px-7 py-4 text-[0.9375rem] font-medium tracking-[0.02em] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

  if (variant === "primary") {
    return cn(
      base,
      "bg-action text-paper hover:bg-action-hover",
      "before:absolute before:inset-x-0 before:-bottom-px before:h-px before:origin-left before:scale-x-0 before:bg-gold before:transition-transform before:duration-300",
      "hover:before:scale-x-100",
    );
  }
  if (variant === "secondary") {
    return cn(
      base,
      tone === "navy"
        ? "border border-paper/30 text-paper hover:bg-paper hover:text-navy-900"
        : "border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-paper",
    );
  }
  return cn(
    base,
    "rounded-full border px-5 py-3 text-[0.875rem]",
    tone === "navy"
      ? "border-paper/25 text-paper hover:border-paper/60"
      : "border-ink/15 text-ink hover:border-navy-900",
  );
}

interface ButtonAsLinkProps extends BaseProps {
  href: string;
  external?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  href,
  external,
  variant = "primary",
  tone = "paper",
  icon,
  children,
  className,
}: ButtonAsLinkProps) {
  const classes = cn(buttonClasses(variant, tone), className);
  const content = (
    <>
      {icon && <span className="relative z-10 inline-flex">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({
  variant = "primary",
  tone = "paper",
  icon,
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={cn(buttonClasses(variant, tone), className)} {...rest}>
      {icon && <span className="relative z-10 inline-flex">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
