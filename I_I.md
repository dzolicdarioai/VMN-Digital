# VMN Digital — implementation log (I_I)

Companion to `IMPLEMENTATIO_IMPROVEMENTS.ms`. Use this file for a concise “what’s done” narrative; the `.ms` file remains the checkbox source of truth.

---

## Phase L — SEO & meta (done)

| Item | What was implemented |
|------|----------------------|
| **L1** | Root `metadata` in `app/layout.tsx`: `metadataBase` from `NEXT_PUBLIC_SITE_URL` (fallback `https://vmn-digital.com`), `title` default + template, `description`, `applicationName`, `alternates.canonical`. |
| **L2** | `openGraph` (type, locale, `alternateLocale`, url, siteName, title, description, images) and `twitter` (`summary_large_image`, title, description, images). Shared image: **`/og.png`** in `public/` (minimal placeholder PNG; replace with a 1200×630 branded asset when ready). |
| **L3** | OG `locale` / `alternateLocale` for EN/HR structure without separate URLs yet; canonical `/` only until locale routes exist. |

**Deploy note:** Set `NEXT_PUBLIC_SITE_URL` to the production origin so `metadataBase` and absolute OG URLs resolve correctly.

---

## Phase M — Polish pass (done)

| Item | What was implemented |
|------|----------------------|
| **M1** | Section rhythm: `.section-padding-alt` (mid step between default and tight), `.section-hero` (hero bottom padding tuned). Applied: **Process** + **FAQ** → `section-padding-alt`; **Hero** → `section-hero`. |
| **M2** | Reveal / process step animations **700ms → 550ms**; primary/card hover transitions **300ms → 250ms** (`duration-[250ms]`). |
| **M3** | EN/HR pass: testimonial carousel dot control `aria-label` moved to i18n (`testimonials.carouselDotsLabel`). CTA, FAQ, footer, and contact copy already came from `dictionaries`; emails stay fixed per product spec. |
| **M4** | Below-fold code-splitting: **Portfolio**, **Testimonials**, **Faq**, **ContactUs**, **Footer** loaded with `next/dynamic` on the home page. |

---

## Quick verification checklist (L + M)

- [x] Layout exports full SEO metadata + OG/Twitter + placeholder `og.png`
- [x] Section classes create visible rhythm (hero / alt / tight / default)
- [x] Motion timings tightened without `prefers-reduced-motion` regressions
- [x] No remaining English-only carousel chrome string for HR locale
- [x] Dynamic imports for lower sections (no new heavy assets added)

---

## Not in scope for L/M (unchanged)

- Phases I–K items (FAQ checklist boxes, contact wiring, footer checklist in `.ms`) — still as in `IMPLEMENTATIO_IMPROVEMENTS.ms` unless completed elsewhere.
- Native HR URLs / `hreflang` pairs — deferred until separate routes or hosting rules exist.
