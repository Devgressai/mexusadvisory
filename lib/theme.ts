/**
 * Theme helpers. Themes are identified by a string id; there are three of
 * them and the value lives both in localStorage and as the `data-theme`
 * attribute on <html>.
 */

export const THEMES = ["signature", "refined", "modern"] as const;
export type ThemeId = (typeof THEMES)[number];

export const DEFAULT_THEME: ThemeId = "signature";
export const THEME_STORAGE_KEY = "mexus-theme";

export const THEME_LABELS: Record<ThemeId, { label: string; blurb: string }> = {
  signature: {
    label: "Signature",
    blurb: "Brand-faithful — logo-exact navy and gold on cool whites.",
  },
  refined: {
    label: "Refined",
    blurb: "Warmer editorial whites, muted bronze-gold, softened navy.",
  },
  modern: {
    label: "Modern",
    blurb: "Blue-gray editorial system with desaturated navy and matte gold.",
  },
};

export function isTheme(value: string | null | undefined): value is ThemeId {
  return !!value && (THEMES as readonly string[]).includes(value);
}

/**
 * Inline <script> payload that runs before React hydrates. Reads the
 * persisted theme from localStorage and writes it to the <html> element's
 * `data-theme` attribute, preventing a flash of the default theme on
 * first paint when the user has a stored preference.
 */
export const THEME_INIT_SCRIPT = `
(function(){
  try {
    var t = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (t === 'refined' || t === 'modern' || t === 'signature') {
      document.documentElement.dataset.theme = t;
    } else {
      document.documentElement.dataset.theme = 'signature';
    }
  } catch (e) {
    document.documentElement.dataset.theme = 'signature';
  }
})();
`.trim();
