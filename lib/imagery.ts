/**
 * Image provider abstraction.
 *
 * Every image used in the design system is declared once in
 * `content/imagery.ts` as an `ImageEntry`. Components reference images by
 * id via `getImage(id)`. That indirection gives us a single swap-out point
 * when we plug in a remote image generation provider (Google Gemini /
 * Imagen, or any other).
 *
 * How to plug in a provider later:
 *   1. Run the provider against the `prompt` fields in `content/imagery.ts`.
 *   2. Populate each entry's `src` with the returned asset URL (or keep
 *      writing local WebP files into /public/imagery/).
 *   3. No component code changes are required.
 *
 * Design invariants:
 *   - alt text is always bilingual (en/es)
 *   - src is always a path or remote URL (consumer passes directly to next/image)
 *   - prompts are stable inputs for deterministic regeneration
 *   - aspect is declared up-front so layouts stay stable while imagery evolves
 */

import type { LocalizedString } from "@/types/content";

export type ImageAspect = "landscape" | "portrait" | "square";

export type ImageSource = "local" | "google-imagen" | "google-gemini-flash" | "unsplash" | "custom";

export interface ImageEntry {
  /** Stable id, used by components to reference this image. */
  id: string;
  /** next/image src — public path, or remote URL when a provider fills it. */
  src: string;
  /** Bilingual alt text. Never optional. */
  alt: LocalizedString;
  /** Authoring prompt — reused when regenerating via a provider. */
  prompt: string;
  /** Aspect ratio of the source file (independent of how we crop it). */
  aspect: ImageAspect;
  /** Which provider produced this asset. */
  source: ImageSource;
}

export interface ImageRegistry {
  [id: string]: ImageEntry;
}

/** Resolve an image by id. Returns undefined if missing so the caller can
 * decide how to gracefully degrade (usually omitting the image entirely). */
export function getImage(
  registry: ImageRegistry,
  id: string,
): ImageEntry | undefined {
  return registry[id];
}

/** Guard that narrows on the existence of a registry entry. */
export function hasImage(
  registry: ImageRegistry,
  id: string,
): id is keyof ImageRegistry & string {
  return Object.prototype.hasOwnProperty.call(registry, id);
}
