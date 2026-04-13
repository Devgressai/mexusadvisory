# Mexus Advisory

Premium brochure-style website for Mexus Advisory — a private cross-border advisory practice.

Design system, IA, and build decisions are documented in [`docs/creative-direction.md`](./docs/creative-direction.md).

## Stack

- **Next.js 15** App Router · **React 19** · **TypeScript** strict
- **Tailwind CSS v4** (CSS-first config in `app/globals.css`)
- **Framer Motion** (LazyMotion + domAnimation)
- **Radix Dialog** (a11y primitive for menu overlay)
- **next/font** — Fraunces (display) + Inter (UI)
- **Vercel** deployment-ready

## Getting started

```bash
pnpm install   # or npm install / yarn
pnpm dev       # start dev server at http://localhost:3000
```

The homepage renders at `/` (internally rewritten to `/en`). Spanish mirror at `/es`.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Local dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript no-emit |

## Project structure

```
app/
  [locale]/              # en | es route tree
    layout.tsx           # locale shell (header, footer, motion provider)
    page.tsx             # homepage
    capabilities/        # index + [slug]
    focus/[slug]         # focus briefings
    about/               # about, people, offices, partners
    contact/             # contact page
  globals.css            # design tokens (@theme) + base styles
  layout.tsx             # root html/body + next/font
  not-found.tsx

components/
  primitives/            # Container, Section, Button, LinkArrow, etc.
  motion/                # FadeRise, Stagger, HairlineDraw, MotionProvider
  shell/                 # Header, MenuOverlay, Footer, LanguageSwitcher, WhatsAppButton
  home/                  # Homepage section components

content/                 # Typed, local content (no CMS)
  site.ts
  navigation.ts
  capabilities.ts
  focus.ts
  offices.ts
  people.ts
  partners.ts
  i18n/
    en.ts
    es.ts

lib/
  i18n.ts                # getDictionary, t(), tl(), localizedPath
  seo.ts                 # buildMetadata, JSON-LD
  cn.ts                  # clsx + tailwind-merge

types/
  content.ts             # content type contracts

middleware.ts            # rewrites / → /en for clean English URLs
docs/
  creative-direction.md  # full strategy + design system spec
```

## Design system at a glance

- **Paper-dominant, navy-structured, gold-punctuated.** Enforced ratio: paper ≥ 70%, navy ≤ 20%, action-blue ≤ 5%, gold ≤ 1%.
- **Greyscale-first:** the composition must read correctly without color.
- **Typography:** Fraunces (display, opsz 144, SOFT 30) + Inter (UI). Fluid clamp scale, tight letter-spacing, editorial hierarchy.
- **Motion:** LazyMotion + domAnimation. Only FadeRise, Stagger, HairlineDraw, MenuReveal, and LinkArrow hover — no springs, no parallax, no scroll-jack.
- **Buttons:** `rounded-[2px]` (crisp, not bubbly). Primary action-blue fill with gold hairline underline on hover.

## Internationalization

- Dictionary-based, zero runtime fetch.
- `app/[locale]/...` segment. `middleware.ts` rewrites `/` → `/en` so English URLs stay clean (`/capabilities`), Spanish URLs show locale (`/es/capabilities`).
- Language switcher swaps the locale segment in-place.
- Spanish content authored in `content/i18n/es.ts` and inline on each data file.

## Content model

All content is local TypeScript, typed via `types/content.ts`. To add a capability, focus topic, person, or office, edit the corresponding file in `content/` — TypeScript will catch missing fields at build time.

## Performance budget

- LCP < 2.0s on 4G
- CLS < 0.02
- Home JS < 140KB gzip
- No runtime CSS-in-JS, no component libraries beyond Radix Dialog

## Accessibility

- Semantic landmarks, skip link, focus trap in menu overlay (Radix).
- `prefers-reduced-motion` honored in all motion primitives.
- Gold focus rings (never default blue blob).
- `aria-current` on active nav, lang attribute per route.

## Deployment

```bash
vercel         # preview
vercel --prod  # production
```

## Next steps

- Authenticate Spanish content variants beyond UI strings (verify translations with a native reviewer before launch).
- Swap Fraunces/Inter for licensed pairing (GT Sectra + Söhne or equivalent) when budget allows — single-file change in `app/layout.tsx` + CSS vars.
- Add a real contact form backend (Formspree, Resend, or /api/contact route).
- Image direction: commission abstract linework or architectural details rather than stock photography.
