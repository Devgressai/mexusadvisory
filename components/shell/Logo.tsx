import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  /**
   * Which native container the logo sits in.
   * The mark is gold-on-navy at rest; it should never be recolored.
   * On paper headers the navy square becomes a small brand badge.
   */
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className }: LogoProps) {
  return (
    <span
      aria-label="Mexus Advisory"
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-navy-900",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/brand/mexus-mark.png"
        alt=""
        width={size}
        height={size}
        priority
        className="h-full w-full object-contain"
      />
    </span>
  );
}
