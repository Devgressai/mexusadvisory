# Mexus Advisory — Creative Direction & Build Specification

Authoritative source of truth for design, information architecture, and front-end implementation. Supersedes all prior drafts.

---

## 1. Positioning

Private cross-border counsel — the firm principals call when immigration, capital, jurisdiction, and risk collide across frontiers. The site must radiate *quiet authority*.

**Benchmark for structural logic:** bcg.com.
**Benchmark for tone:** Brunswick, Teneo, Lazard, Covington.

**Must feel:** premium · white-dominant · editorial · strategic · advisory-led · globally credible · calm · expensive.

**Must NOT feel:** startup · app-like · chatbot-like · SaaS · legal-template · generic consulting template · over-converted for lead-gen · overly similar to BCG · crypto · fintech · luxury-hotel · dark-mode-tech.

---

## 2. Brand palette (extracted from the official logo)

Colors sampled directly from the supplied logo PNG. These values are locked.

### Exact extractions

| Region | RGB | Hex |
|---|---|---|
| Logo navy background | `rgb(19, 21, 37)` | **`#131525`** |
| Logo gold primary stroke | `rgb(206, 166, 105)` | **`#CEA669`** |
| Logo gold shadow end | `rgb(151, 122, 84)` | `#977A54` |
| Logo gold highlight end | `rgb(216, 174, 108)` | `#D8AE6C` |
| Wordmark | `rgb(255, 255, 255)` | `#FFFFFF` |

### Design tokens

```
paper          #FFFFFF   dominant surface (≥ 70% of pixels)
bone           #FAF9F6   rare secondary surface (Mexus Focus band)
rule           #E6E7EB   hairline dividers

ink            #0B1220   body text on paper
ink-muted      #5B6576   meta, captions, lede on paper

navy-950       #0A0C18   deepest — menu overlay only
navy-900       #131525   EXACT logo navy — primary structural (≤ 20%)
navy-800       #1C1E33   lift — alt surfaces
navy-700       #272A42   hover depth on navy

action         #1D4ED8   primary CTA fill (≤ 5%, functional only)
action-hover   #1E40AF   CTA hover

gold           #CEA669   EXACT logo gold — micro-accent only (≤ 1%)
gold-soft      #D8AE6C   highlight variant
gold-deep      #A88250   shadow variant, hover/reserved
```

### Usage rules

- **Paper dominates** the page. Every route reads as "mostly white" or the composition is wrong.
- **Navy** anchors structural surfaces only: footer, menu overlay, one credibility block on the homepage, form borders. Never as body text on paper (use `ink`).
- **Gold** is punctuation: hairlines, marker dashes, bullet dots, hover underlines, the hero ornament, the footer top rule. Never a fill, never a CTA color, never layered on navy at large area (that is reserved to the logo itself).
- **Action blue** appears only as filled primary buttons and active form states. Not as a tint, not as a background, not as a decorative accent.
- **Greyscale test:** the composition must read correctly with zero color.

### Complement, don't compete with the logo
The logo renders gold-on-navy at brand-mark scale. The UI must provide the paper field that lets the logo feel rare. No other element on the page may render gold at logo scale. Navy is reserved to structural anchors, outside of which the page is white.

---

## 3. Typography

- **Display serif:** Fraunces (variable, `opsz 144`, `SOFT 30`, tight tracking). H1–H3.
- **UI sans:** Inter (variable). Body, UI, meta.
- **Upgrade path:** GT Sectra + Söhne · Canela + Söhne · Tiempos Headline + National 2.

### Scale (fluid clamp)

```
display   clamp(3rem, 5.2vw, 5.5rem)     hero H1 only
h1        clamp(2.25rem, 3.6vw, 3.625rem) interior H1
h2        clamp(1.75rem, 2.3vw, 2.5rem)   section H2
h3        clamp(1.25rem, 1.55vw, 1.625rem) sub-section
lead      1.1875rem / 1.6
body      1.0625rem / 1.7
small     0.9375rem / 1.6
eyebrow   0.75rem, tracking 0.18em, uppercase, medium
```

---

## 4. Spacing & grid

- 12-column grid · 24px gutters desktop / 16px mobile.
- `max-w-[1440px]` content · `max-w-[68ch]` reading column.
- 8px baseline. Tokens: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Section padding: `py-24 md:py-32 lg:py-40` hero · `py-20 md:py-24 lg:py-32` standard · `py-14 md:py-16 lg:py-20` compact.
- Outer gutters: `shell-gutter` utility = `px-6 md:px-10 lg:px-16 2xl:px-24`.

---

## 5. Motion

- **Library:** Framer Motion · `LazyMotion + domAnimation` (strict).
- **Durations:** 400ms micro · 600ms reveal · 800ms hero.
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (out-expo).
- **Allowed primitives:** FadeRise, Stagger, HairlineDraw, MenuReveal (clipPath wipe), LinkArrow hover.
- **Forbidden:** springs, parallax, scroll-jack, hover tilt, cursor tracking, particles, layout animations on scroll, `whileHover` scale.
- **All motion honors `prefers-reduced-motion`** globally via CSS.

---

## 6. Information architecture

### Menu (top-level, exactly 3 items)

1. **Capabilities**
   - Global Immigration Consulting
   - Risk Management
   - Wealth Advisory
   - Alternative Capital Sourcing
   - Jurisdictional Optimization
2. **About Mexus Advisory**
   - Our People
   - Our Offices
3. **Mexus Professional Partners Program** *(top-level, not nested)*

### Routes

```
/                                           homepage
/capabilities                               capabilities index
/capabilities/[slug]                        individual capability
/focus/[slug]                               focus briefing (3 topics)
/about                                      about
/about/people                               people index
/about/people/[slug]                        individual profile
/about/offices                              offices
/partners-program                           partners program (TOP-LEVEL)
/contact                                    contact
/es/*                                       Spanish mirror
```

Middleware rewrites `/` → `/en` so English URLs stay clean.

### How users reach each page
- **Capabilities:** menu → Capabilities children · homepage Capabilities Navigator · related-capabilities on focus pages.
- **Focus topics:** homepage Mexus Focus section · menu overlay featured column · related-focus blocks on capability pages.
- **People / Offices:** menu → About children · homepage Credibility section · footer.
- **Partners Program:** menu top-level · footer.
- **Contact:** homepage ContactCTA · interior page CTA blocks · footer Contact button · WhatsApp in header at all times.

---

## 7. Header and Footer

### Header
- Sticky · 80px desktop / 64px mobile · paper background.
- Hairline bottom border fades in on scroll > 16px (200ms).
- Never transparent-over-hero.
- **Left cluster:** `[Menu button] [Logo 36px navy badge] [MEXUS ADVISORY wordmark]`.
- **Right cluster:** `[WhatsApp] [EN / ES]`.
- **No Facebook, no search, no phone, no Contact button in header.**

### Footer
- Navy-900 background · 1px gold top rule · paper typography.
- **Left:** `— Offices` (4 city links) + `— About` (Our practice, Our people, Partners program).
- **Right:** `— How can we help?` eyebrow + Fraunces H3 tagline + `Contact the firm` secondary button.
- **Bottom row:** Logo + wordmark · legal + EN/ES switch.
- No social icons. No newsletter. No Facebook.

---

## 8. Homepage (6 sections)

1. **Hero** — paper, display Fraunces H1, lead, primary CTA + WhatsApp, single vertical gold hairline ornament. No stock imagery.
2. **Mexus Focus** — bone band, 3 editorial cards (Immigration Volatility, International Investments, US/Mexico Trade). Gold top rule animates on hover.
3. **Capabilities Navigator** — paper, bespoke vertical editorial list (not a tile grid), 5 full-width rows `01`–`05`.
4. **Credibility Section** — navy-900 (only fully navy section), gold top rule, gold eyebrow, paper serif H2, 6/12 body + 5/12 metadata list.
5. **Offices Preview** — paper, no map, 4-column text grid.
6. **Contact Invitation** — paper, single full-width gold hairline at top, massive Fraunces H2 "How can we help?", 58ch lede, LinkArrow + WhatsApp. **Not a boxed widget.**

---

## 9. Interior page templates

- **Capability:** breadcrumb → PageHero → thesis pull-quote → What we advise on → Who it's for → Strategic themes → Engagement approach → Related focus → CTA.
- **Focus topic:** breadcrumb + PageHero with date-stamp → Landscape → Implications → Related capabilities → CTA.
- **About:** PageHero → Our posture → How we work → 3 LinkArrows (People, Offices, Partners Program) → CTA.
- **People index:** PageHero → 4-column portrait grid.
- **Person page:** breadcrumb → PageHero → 5/7 split (portrait, bio).
- **Offices:** PageHero → editorial 3-col row per office, no map.
- **Partners Program:** PageHero → Why partner → Collaboration model → Benefits → Pull quote → CTA.
- **Contact:** PageHero → 7/5 split (form left, direct channels right). Only place a form exists on the site.

---

## 10. Component inventory

- **Shell:** Header, MenuOverlay, Footer, LanguageSwitcher, WhatsAppButton, SkipLink, Logo.
- **Primitives:** Container, Section, Eyebrow, SectionHeader, Button, ButtonLink, LinkArrow, Rule, GoldRule, Prose, MetaList, Breadcrumb, PageHero.
- **Motion:** MotionProvider, FadeRise, Stagger, HairlineDraw.
- **Home:** HeroHome, FocusModules, CapabilitiesOverview, CredibilitySection, OfficesPreview, ContactCTA.

Rules: single responsibility · typed props · Tailwind only · no runtime CSS-in-JS · no cross-component styling.

---

## 11. Tech stack

- Next.js 15 App Router · React 19 · TypeScript strict (`noUncheckedIndexedAccess`, `noImplicitOverride`)
- Tailwind v4 (CSS-first `@theme` in `app/globals.css`)
- Framer Motion + LazyMotion/domAnimation
- Radix Dialog (a11y primitive for menu only)
- lucide-react (3 icons: Menu, X, MessageCircle)
- next/font/google (Fraunces + Inter, variable)
- No component libraries beyond the above.
- Vercel deployment.

---

## 12. Accessibility

- Semantic landmarks, skip link, focus trap in menu overlay, scroll lock.
- `aria-current` on active nav and language switch.
- `lang` attribute set on `<main>` per locale.
- Gold focus rings (2px / 3px offset) — never default blue glow.
- `prefers-reduced-motion` honored globally.
- Contrast: navy on paper ≥ 12:1 · ink-muted on paper ≥ 4.5:1 · paper/70 on navy ≥ 7:1.

---

## 13. SEO

- Per-route `generateMetadata` with title, description, canonical, `alternates.languages` (en/es).
- OpenGraph (en_US / es_MX, type website).
- JSON-LD `ProfessionalService` on locale layout.
- Single H1 per page · ordered H2/H3 · clean internal links via `localizedPath()`.

---

## 14. Performance budget

- LCP < 2.0s on 4G · CLS < 0.02 · Home JS < 140KB gzip.
- LazyMotion saves ~18KB vs domMax.
- `next/font` self-hosted, subset latin, variable.
- `next/image` with AVIF/WebP, explicit `sizes`.
- `optimizePackageImports` for `framer-motion` and `lucide-react`.

---

## 15. Forbidden patterns (global)

- Transparent-over-hero headers
- Generic tile grids for capabilities
- Gold backgrounds, gold CTAs, gold-heavy anything
- Dark-mode aesthetic
- Spring animations, parallax, scroll-jack
- Stock business imagery
- Drop shadows, gradients, glow, extreme radius
- Runtime CSS-in-JS
- Component library imports beyond Radix Dialog
- **Boxed lead-capture widgets**
- **"How can we assist you today?" intake blocks**
- **Chatbot / help-bubble UI**
- **Facebook links**
- **Blue used as a background or decorative tint**
- **Any homepage CTA rendered as a card/container/widget**

---

## 16. Implementation phases

| Phase | Scope | Status |
|---|---|---|
| 0 · Scaffold | Next 15, TS, Tailwind v4, fonts, middleware, folder tree | done |
| 1 · Shell & design system | primitives, motion, Header, MenuOverlay, Footer | done |
| 2 · Homepage | 6 sections, content, EN/ES | done |
| 3 · Interior templates | capability, focus, about, people, offices, partners, contact | done |
| 3a · Client brief v2 | Partners top-level, ContactCTA editorial invitation, Mexus Focus label | done |
| 3b · Brand palette lock | Logo extraction, navy/gold tokens, real logo asset | done |
| 4 · i18n/SEO/a11y/perf verification | axe, Lighthouse, native Spanish review, image audit | next |
| 5 · Vercel deploy | Preview + production | on command |
