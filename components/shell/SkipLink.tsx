import type { Dictionary } from "@/content/i18n/en";

export function SkipLink({ dict }: { dict: Dictionary }) {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[2px] focus:bg-navy-900 focus:px-4 focus:py-3 focus:text-[0.875rem] focus:text-paper"
    >
      {dict.common.skipToContent}
    </a>
  );
}
