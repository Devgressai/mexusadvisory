/**
 * Editorial motion primitives — BCG-adjacent restraint.
 *
 * These are plain objects (variants + transitions) that get spread into
 * framer-motion `m.*` components. Keeping them as data (not components)
 * means they stay tree-shakeable and work inside both client and server
 * component trees, as long as the consuming component is a client.
 *
 * Rules:
 *  - never use springs
 *  - never use scale > 1
 *  - never animate for longer than 800ms
 *  - always honor prefers-reduced-motion (handled globally in globals.css)
 */

export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

/** Primary section/headline reveal. */
export const revealUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: EASE_OUT_EXPO },
} as const;

/** Softer opacity-only reveal for subtle supporting elements. */
export const revealSoft = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: EASE_OUT_EXPO },
} as const;

/** Staggered container for editorial lists. */
export const revealStagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, amount: 0.15 },
  transition: {
    staggerChildren: 0.06,
    delayChildren: 0.08,
  },
} as const;

/**
 * Utility transition class names — kept as template strings so they can be
 * dropped into Tailwind `className` props. These are the standard hover
 * transitions for editorial links, rows, and quiet imagery.
 */
export const HOVER_LINK =
  "transition-[color,opacity,transform] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

export const HOVER_ROW =
  "transition-[background-color,border-color] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

export const HOVER_IMAGE =
  "transition-opacity duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)]";
