import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  /**
   * Rendered height in pixels. The owl mark is gold-on-transparent, so it
   * sits directly on any background without a navy container. Colors are
   * never altered — the source asset preserves the brand gold.
   */
  size?: number;
  className?: string;
}

export function Logo({ size = 44, className }: LogoProps) {
  return (
    <span
      aria-label="Mexus Advisory"
      className={cn("inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/brand/mexus-mark-owl.png"
        alt=""
        width={size}
        height={size}
        priority
        className="h-full w-full object-contain"
      />
    </span>
  );
}
