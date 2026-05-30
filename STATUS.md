# BlueTick 2026 Refresh — Build Status

**Last updated:** 2026-05-29
**Last batch:** Phase 4A-fix — restored 2 components broken by overzealous cleanup
**Phase 2 status:** COMPLETE ✓
**Phase 3 status:** COMPLETE ✓ (3A + 3B)
**Phase 4 status:** 4A done (corrected) — 4B pending (browser measurement)

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
