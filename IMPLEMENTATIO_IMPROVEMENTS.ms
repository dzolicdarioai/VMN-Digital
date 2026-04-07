# VMN Digital — Implementation & Improvement Plan

**Purpose:** Single source of truth for building the high-converting landing page and tracking progress.  
**Constraints captured from product decisions:**

| Topic | Decision |
|--------|----------|
| Language | **English** default; **Croatian** via UI toggle (copy lives in i18n/dictionaries, not hardcoded only EN). |
| Ideal client | **Do not** add a dedicated “ideal client” section. |
| Portfolio data | **No real client data** for now — use **placeholder** projects (titles, niches, results framed generically) until real case studies exist. |
| Free analysis | **Add explicit copy** describing what the free analysis includes (hero subline, FAQ, optional short bullet near CTA). |
| Contact | Emails only: `dzolicdario@vmn-digital.com`, `info@vmn-digital.com`. |
| Brand line | **VMN – Visual Marketing Network** (use in footer / about / meta where appropriate). |
| Tone | **English** for the default site experience. |
| SEO geography | **Defer** locale-specific SEO; ship solid default `metadata` + OG structure first. |
| Accessibility | **Skipped** per scope (do not block on a11y audits in this phase). |
| Form | **No** mailto fallback / extra fallback flows — keep contact fast and clear. |
| Pricing | **None** — focus on contact only. |

---

## Phase A — Foundation & global UX

- [ ] **A1** Keep **single page**, **dark theme**, **Geist** (and Geist Mono if used for labels/code snippets).
- [ ] **A2** Global styles: **glow**, **blur**, **gradients**, generous **spacing**, avoid flat “template” blocks (custom section rhythm, not only alternating gray bands).
- [ ] **A3** **Smooth scroll** for in-page anchors (`html` / CSS or JS — pick one consistent approach).
- [ ] **A4** **Reveal animations**: fade / slide-in for sections (subtle; respect performance).
- [ ] **A5** **Micro-interactions**: button hover/active states, card hover (lift/glow), link underline or color transitions.
- [ ] **A6** **i18n architecture**: English + Croatian strings (JSON or TS objects); **language toggle** in header (persists `localStorage` or cookie so choice survives refresh).
- [ ] **A7** Primary CTA label: **“Zatraži besplatnu analizu”** in **Croatian** locale; **English equivalent** in EN (e.g. “Request a free analysis”) — same target (`#contact`).

---

## Phase B — Sticky header & navigation

- [ ] **B1** **Sticky header** with backdrop (blur + border) so content doesn’t clash while scrolling.
- [ ] **B2** Desktop menu: **Services**, **About**, **Process**, **Testimonials**, **FAQ**, **Contact** → anchor IDs (`#services`, `#about`, `#process`, `#testimonials`, `#faq`, `#contact`).
- [ ] **B3** **Active link** highlighting based on scroll position (Intersection Observer or similar).
- [ ] **B4** **Mobile**: **hamburger** opening **sheet/drawer** with same links + CTA + language toggle.
- [ ] **B5** **Portfolio**: section on page with id `#portfolio`; link from footer (and optional secondary CTA) — **not** required in main 6-item nav unless you add it later.

---

## Phase C — Hero (premium, not basic)

- [ ] **C1** Layered **background**: mesh/radial **gradients**, soft **blobs**, **grid** overlay, noise (CSS or subtle image).
- [ ] **C2** **Glow** accents (primary color) tied to layout, not random.
- [ ] **C3** **Mockup** block: browser/window chrome + abstract UI (CSS/SVG) — premium, minimal chrome.
- [ ] **C4** Headline + supporting copy (EN/HR); mention **free analysis** value in one line (ties to Phase A free-analysis copy).
- [ ] **C5** Primary CTA → smooth scroll to **#contact**.
- [ ] **C6** **Skip** trust strip / logo row.

---

## Phase D — Services

- [ ] **D1** Two (or more) service cards with **icons** (consistent set, e.g. Lucide).
- [ ] **D2** **Hover**: border glow, slight translate or scale, shadow — distinct from static cards.
- [ ] **D3** Short **outcome-focused** bullets per service (EN/HR).

---

## Phase E — About

- [ ] **E1** Section id `#about`; include **VMN – Visual Marketing Network** where it fits naturally.
- [ ] **E2** No **ideal client** subsection — keep narrative general and capability-focused.
- [ ] **E3** Optional light stats only if honest; otherwise skip or use soft wording.

---

## Phase F — Process (timeline)

- [ ] **F1** **Vertical or horizontal timeline** with **connected steps** (line/thread between nodes).
- [ ] **F2** Four steps (or agreed number) with titles + one short paragraph each (EN/HR).
- [ ] **F3** Step numbers or icons; animate on scroll into view.

---

## Phase G — Portfolio

- [ ] **G1** **2–3 project cards** — **placeholder** content (fictional or anonymized names acceptable).
- [ ] **G2** Each card: **title**, **category/niche**, **problem → solution** one-liners, **2–3 result metrics** (generic if needed, e.g. “Faster LCP”, “Higher form completion”).
- [ ] **G3** Optional “View case study” → `#contact` or `#` until real URLs exist.

---

## Phase H — Testimonials

- [ ] **H1** **Minimum 5** testimonials; **avatar** (image or initials), **5 stars**, quote text (EN/HR).
- [ ] **H2** **Desktop**: grid or row; **Mobile**: **carousel** (e.g. Embla) with dots/arrows.
- [ ] **H3** Name + role/company (placeholder names OK if clearly fictional for launch).

---

## Phase I — FAQ

- [ ] **I1** Section id `#faq`; **accordion** UI.
- [ ] **I2** Questions covering: what **free analysis** includes, timeline expectations, what client should prepare, what if they already have a site, **no pricing** reassurance, next steps after contact (EN/HR).

---

## Phase J — Contact

- [ ] **J1** Section id `#contact`; **fast** layout: short intro + **both emails** prominently.
- [ ] **J2** Form: name, email, message (and optional subject) — **submit behavior** wired when backend exists; for now UI-only or stub as per your stack.
- [ ] **J3** No pricing tables; single clear **primary CTA** repeated from hero/header.

---

## Phase K — Footer & legal

- [ ] **K1** **Real anchor links** to all main sections (including `#portfolio` if present).
- [ ] **K2** Links to **`/privacy`** and **`/terms`** (dedicated routes or static pages).
- [ ] **K3** **Privacy** and **Terms** pages: placeholder structured content (you’ll replace with legal review later).
- [ ] **K4** Copyright year + **VMN – Visual Marketing Network** tagline.

---

## Phase L — SEO & meta

- [ ] **L1** `metadata` in layout: `title`, `description`, `metadataBase` (canonical base URL when domain is fixed).
- [ ] **L2** **Open Graph** + **Twitter** card fields; **`og:image`** path placeholder (e.g. `/og.png`) — **you will drop the asset later**.
- [ ] **L3** **Locale / geo SEO** — **later** per your note; keep structure ready (`alternates` or separate pages when needed).

---

## Phase M — Polish pass

- [ ] **M1** Consistent **spacing scale** between sections (reduce “wall of same padding”).
- [ ] **M2** Tune animation timings so nothing feels sluggish or gimmicky.
- [ ] **M3** Cross-check EN/HR toggle on every user-visible string (CTA, FAQ, footer).
- [ ] **M4** Light **performance** check: avoid huge unoptimized assets; lazy below-fold media if added later.

---

## Progress summary

| Phase | Name | Status |
|-------|------|--------|
| A | Foundation & i18n | ☐ |
| B | Header & nav | ☐ |
| C | Hero | ☐ |
| D | Services | ☐ |
| E | About | ☐ |
| F | Process timeline | ☐ |
| G | Portfolio (placeholders) | ☐ |
| H | Testimonials + carousel | ☐ |
| I | FAQ | ☐ |
| J | Contact | ☐ |
| K | Footer & legal pages | ☐ |
| L | SEO / meta | ☐ |
| M | Polish | ☐ |

**Legend:** ☐ not started · ◐ in progress · ☑ done  

---

## Open items / inputs still useful later

- Final **English** and **Croatian** proofread (native HR for HR strings).
- Real **portfolio** metrics and **testimonial** permissions when available.
- Final **domain** and **OG image** file.
- Legal review of **Privacy** / **Terms** before production.

---

*File: `IMPLEMENTATIO_IMPROVEMENTS.ms` — implementation checklist only; no code in this document.*
