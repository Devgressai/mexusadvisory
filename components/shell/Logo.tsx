import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  /**
   * Square side in pixels. Renders the owl mark inside its native navy
   * container exactly as the brand mandates — colors are never altered.
   */
  size?: number;
  className?: string;
}

/**
 * Mexus mark — the owl, tightly cropped from the official logo via
 * ImageMagick into a clean square. The navy background is part of the
 * brand and is preserved at every size.
 */
export function Logo({ size = 44, className }: LogoProps) {
  return (
    <span
      aria-label="Mexus Advisory"
      className={cn("inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/brand/mexus-mark-square.png"
        alt=""
        width={size}
        height={size}
        priority
        className="h-full w-full object-contain"
      />
    </span>
  );
}
