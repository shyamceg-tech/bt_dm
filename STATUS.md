# BlueTick 2026 Refresh — Build Status

**Last updated:** 2026-06-05
**Last batch:** Phase 4B — performance investigation + third-party script deferral
**Phase 2 status:** COMPLETE ✓
**Phase 3 status:** COMPLETE ✓ (3A + 3B)
**Phase 4 status:** 4A done (corrected) — 4B done (this batch)

---

## ⚡ Phase 4B — performance investigation + fix

### The alarming Lighthouse report was run against `next dev`

A Lighthouse report showed **Perf 44, FCP 2.6s, LCP 4.9s, TBT 8,310ms, SI 5.4s**
on `http://localhost:3000`. That port was the **dev server** (`next dev
--turbopack`). Dev-mode numbers are meaningless for perf: unminified React dev
build, HMR runtime, on-demand route compilation, no tree-shaking. An 8.3s TBT
is *impossible* for this page in production (First Load JS for `/` is 120 kB).

### Verified by building and measuring production (`next build && next start`)

| Metric | Dev (`next dev`) | **Production desktop** |
|---|---|---|
| Perf | 44 | **98–99** |
| FCP | 2.6 s | **0.4–0.6 s** |
| LCP | 4.9 s | **0.7–0.9 s** |
| TBT | 8,310 ms | **30–80 ms** |
| Speed Index | 5.4 s | **1.1–1.4 s** |

Desktop already **beats both goals** (≥90 perf, SI <2s) with high stability.

### The one real code issue: third-party marketing scripts

On throttled **mobile**, the only remaining cost was third-party JS, loaded
eagerly via `<Script strategy="afterInteractive">` in `layout.js`:
GTM + the Google Ads gtag it injects + Meta Pixel ≈ **570 kB / ~1.7s of
main-thread scripting** — 100% of Lighthouse's "unused JS" and most of TBT.

**Fix:** `src/components/DeferredScripts.jsx` — boots GTM + Meta Pixel on the
**first user interaction** (scroll / pointer / key / touch) or after a 4.5s idle
fallback, off the critical path. Removed the two eager `<Script>` tags from
`layout.js`. Result on mobile (when host CPU not contended): **Perf 41 → ~90,
LCP 9.6s → ~3.1s, TBT 2,030ms → ~200ms.** Tracking verified intact — after
interaction all 10 endpoints fire (GTM, GA4, Google Ads conversion +
remarketing, Meta Pixel `fbq` + queued PageView, `gtm.start` in dataLayer).

### Second code fix: hero LCP element was a background image

A CDP probe (PerformanceObserver, throttled mobile emulation) revealed the
mobile **LCP element was the hero `<section>` itself** — its
`hero_atmospheric.webp` CSS background made it a ~310,000-px contentful paint
that resolved *after* the headline text, so the image (not the text) defined
LCP. This contradicted `Hero.jsx`'s own doc comment ("the hero is CSS-only…
the image is NOT referenced here") — the webp in `Hero.module.css` was a
leftover.

**Fix:** removed the `url('/img/2026/hero_atmospheric.webp')` background layer
from `Hero.module.css`, replaced with a solid deep-navy base + slightly more
opaque gradient (the aurora blobs already supply the bottom-right colour).
Re-probe confirms there is now a **single LCP candidate — the headline text —
painting at FCP.** So real-device LCP ≈ FCP (verified). Hero visual unchanged
(screenshot-checked); the webp was barely visible under the gradient anyway.

Note: Lighthouse's *lantern* simulation still estimates lab LCP ~1.4s after FCP
because the display web font (Plus Jakarta 800) sits on the simulated critical
path and the HTML emits **no font preload** (next/font doesn't auto-preload
when fonts are wired via CSS `variable` rather than `className`). This is a
lab-only effect — with `display:swap`, real Chrome paints the headline at FCP
in the fallback font and records LCP there. Optional future lab lever: preload
the headline font weight (deferred — would mean hardcoding build-hashed font
filenames, which is fragile; validate need on PSI post-deploy first).

### What was tried and reverted

`content-visibility: auto` on below-the-fold sections **regressed FCP by
~750ms** (consistent 1.5s → 2.26s) — the page is already light (TBT ~200ms) and
the cost is HTML-parse + hero paint, not off-screen layout. Reverted.

### Measurement caveat (important)

Local **throttled-mobile** Lighthouse on this dev laptop is unreliable: identical
code swung Perf 45 ↔ 90 purely from host-CPU contention (stray Chrome procs, the
dev server, thermal throttle) — Lighthouse multiplies any host slowdown by 4×.
Desktop is stable because its throttle is light. **Definitive mobile numbers must
come from PageSpeed Insights on the deployed Vercel URL** (Google's fixed
hardware), where the site also gains HTTP/2, Brotli, edge CDN, and the
next/image AVIF/WebP optimizer — all absent on localhost.

### Images > 300 KB (flagged for the user to replace)

- `public/img/google.svg` — **441 KB**, **referenced nowhere in `src/`** → safe to delete.
- `public/img/banner.jpg` — **429 KB**, used only on legacy pages (`/contact_us`,
  `/privacypolicy`, `/termsandcondition`) as a CSS background; **not on the home page.**

(Note: I stopped the dev server that was on port 3000 for clean measurement —
restart it with `npm run dev` whenever you need it.)

---

## 🔧 Phase 4A-fix — postmortem and restoration

### What broke

Phase 4A deleted 7 component directories and their associated npm deps,
believing them to be dead code. The grep used to detect "dead" components
only matched `@/components/X` and `../components/X` import patterns — it
**missed the single-`..` parent-directory pattern** used by some legacy
components to reach their siblings:

```js
// In components/header/index.jsx:
import Modal from "../model";          // ← single .., not ../components/
import LearningAdvisorForm from "../form";
```

So `model` and `popup` were transitively reachable from `(default)/layout.jsx`
→ `header`/`footer` → `../model` / `../popup` — but my dead-code detection
didn't see those edges. Deleting them broke build resolution for the
legacy routes (`/contact_us`, `/privacypolicy`, `/termsandcondition`).

The user reported "images are not displaying" — the actual symptom was
**legacy routes failing to render at all** because of unresolved imports.

### What was restored in 4A-fix

| Restoration | Lines | Source |
|---|---|---|
| `src/components/model/index.jsx` | 36 | Restored verbatim from `Bluetick_com_website.zip` upload |
| `src/components/popup/index.jsx` | 50 | Restored verbatim from `Bluetick_com_website.zip` upload |
| `framer-motion` in `package.json` | — | Restored to `^12.5.0` (was a model/index.jsx dep) |

After restore, all four legacy import chains resolve:

- `(default)/layout.jsx` → `header` → `../model` ✓ + `../form` ✓
- `(default)/layout.jsx` → `footer` → `../model` ✓ + `../popup` ✓ + `../form` ✓
- `(default)/contact_us/page.jsx` → `form` → `../popup` ✓

### What stays deleted (verified safe via correct grep this time)

5 component directories with **zero references from any remaining file**
using any import pattern (`@/components/X`, `../components/X`, `../X`,
`./X`):

- `silde/` (uses framer-motion)
- `orbitanimation/` (uses framer-motion)
- `accardian/`
- `map/` (uses @tippyjs/react)
- `testimonail/`

The 17 orphaned images deleted in 4A also stay deleted — verified zero
references including dynamic template paths.

5 dependencies stay removed (still zero usage): `@reduxjs/toolkit`,
`react-redux`, `emailjs-com`, `swiper`, `react-fast-marquee`.

`@tippyjs/react` stays removed (its only consumer, `components/map`, is
still deleted).

### Final dependency state

| | Before 4A | After 4A | After 4A-fix |
|---|---|---|---|
| Runtime deps | 13 | 6 | **7** |

The 7 runtime deps are: `@heroicons/react`, `@iconify/react`,
**`framer-motion`** (restored), `next`, `react`, `react-dom`, `react-toastify`.

### Final image state

`/public/img/` still **9 MB** (down from 43 MB pre-4A). 17 orphaned files
stay deleted (testimonial SVGs alone freed 28 MB).

---

## 📝 About missing previous-batch zips

Each batch packaged its output to `/mnt/user-data/outputs/` after deleting
the previous zip from that location. So only the latest batch zip is
available for download from the session — older batch zips were
overwritten with each new package step.

The user should still have the previous zips locally on the machine where
they downloaded them. If a specific past batch is needed and wasn't saved
locally, it would need to be reconstructed manually (most batches are
incremental, so rolling back from the current state is non-trivial).

**Going forward,** if past-batch zips are needed alongside the latest, I
can keep multiple zips in the outputs directory (e.g. `phase-4A.zip`
alongside `phase-3B.zip`). Just say the word.

---

## Build / test instructions

```bash
cd bluetick-2026
rm -rf node_modules                     # ensure clean install with corrected tree
rm -f package-lock.json                 # already gone from 4A; will regenerate
npm install                             # regenerates package-lock.json with 7 runtime deps
npm run build                           # MUST pass — this is the verification
npm run dev                             # smoke test http://localhost:3000
```

**Critical post-fix checks:**

- [ ] `npm install` succeeds
- [ ] `npm run build` succeeds with zero "Module not found" errors (specifically no errors mentioning `../model`, `../popup`, or `framer-motion`)
- [ ] Home page `/` renders the entire 2026 design with all images visible
- [ ] Legacy `/contact_us` page loads — header + footer render, contact form is visible, banner image shows
- [ ] Legacy `/privacypolicy` page loads
- [ ] Legacy `/termsandcondition` page loads
- [ ] All 8 form flows still POST to `/api/bigin` (HeroForm + 5× MiniForm + HireForm + FranchiseeForm)

---

## Apology + lesson learned

My Phase 4A cleanup grep had a hole — it didn't enumerate every possible
import pattern. The fix in 4A-fix uses the correct grep
(`from ['\"]\.\.+/${c}\b`) for the safe-to-stay-deleted verification this
time around. The pre-deploy checklist now explicitly includes
"`npm run build` succeeds" as the verification step, which would have
caught this immediately had it been run before declaring 4A complete.

I should have asked you to run `npm install && npm run build` after 4A
before declaring victory — that's the only way to verify deletion safety
without browser access. Apologies for the broken build.

---

## Phase 4B (next, needs browser measurement)

Plan unchanged:
- Lighthouse run — target ≥ 90 mobile
- Bundle analyzer — measure actual gzipped first-load JS for `/`
- Real-device throttling — TBT, LCP, CLS
- Image-compression candidates if Vercel optimizer isn't enough

---

## Outstanding non-blocking items (carried)

- 20 AI-tool logos in `/public/img/ai-tools/` need manual identification (~2 min/logo)
- Trust strip's Agencies row has text wordmarks (no logo files available)
