/**
 * scripts/generate-og-training.mjs
 *
 * One-off generator for the social-share image of the
 *   /digital-marketing-training-in-bangalore landing page
 * at public/img/og-training.png (1200×630). Run with:
 *   node scripts/generate-og-training.mjs
 *
 * Same brand card as scripts/generate-og.mjs (fonts, gradient, tick), only the
 * copy is training / institute-framed so the share card matches the page's
 * intent. Output is a plain raster asset — zero client-bundle / load-speed
 * impact. Re-run only if the card design or copy changes.
 */
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'public', 'img', 'og-training.png');

const HTML = `<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; }
  .card {
    width: 1200px; height: 630px; padding: 72px;
    display: flex; flex-direction: column; justify-content: space-between;
    background: linear-gradient(135deg, #0a1633 0%, #0e2350 55%, #103a7a 100%);
    color: #fff; font-family: 'Segoe UI', Arial, sans-serif;
  }
  .brand { display: flex; align-items: center; gap: 16px; }
  .tick { width: 56px; height: 56px; border-radius: 14px; background: #2dd4bf;
          color: #0a1633; font-size: 34px; font-weight: 800;
          display: flex; align-items: center; justify-content: center; }
  .brand-name { font-size: 32px; font-weight: 700; letter-spacing: -0.5px; }
  .eyebrow { font-size: 40px; font-weight: 600; color: #7dd3fc; margin-bottom: 20px; }
  .headline { font-size: 72px; font-weight: 800; line-height: 1.05; letter-spacing: -1.5px; max-width: 1040px; }
  .chips { display: flex; gap: 20px; }
  .chip { padding: 14px 26px; border-radius: 999px; font-size: 26px; font-weight: 600;
          background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.22); }
</style></head><body>
  <div class="card">
    <div class="brand"><div class="tick">&#10003;</div><div class="brand-name">BlueTick Academy</div></div>
    <div>
      <div class="eyebrow">Hands-on Training &middot; Live Campaigns &middot; Indiranagar Campus</div>
      <div class="headline">Digital Marketing Training in Bangalore</div>
    </div>
    <div class="chips">
      <div class="chip">24-learner batches &middot; 1:1 mentorship</div>
      <div class="chip">60+ tools &middot; 3 live projects</div>
      <div class="chip">100% Placement Record</div>
    </div>
  </div>
</body></html>`;

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(HTML, { waitUntil: 'networkidle0' });
await page.screenshot({ path: OUT, type: 'png' });
await browser.close();
console.log('Wrote', OUT);
