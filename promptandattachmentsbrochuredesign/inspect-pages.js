// Render each .page as a PNG so we can visually inspect overflow.
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const dir = __dirname;
  const outDir = path.join(dir, '_pages');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const htmlPath = path.join(dir, 'brochure.html');

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  // A4 at 96dpi ≈ 794×1123, but our CSS uses mm — let viewport match 210mm×297mm at 3.78px/mm
  await page.setViewport({ width: 800, height: 1130, deviceScaleFactor: 1 });
  await page.goto('file://' + htmlPath, { waitUntil: ['load','networkidle0'] });
  await page.evaluateHandle('document.fonts.ready');

  const count = await page.$$eval('.page', els => els.length);
  console.log('pages:', count);

  for (let i = 0; i < count; i++) {
    const handle = (await page.$$('.page'))[i];
    const fn = path.join(outDir, 'p' + String(i+1).padStart(2,'0') + '.png');
    await handle.screenshot({ path: fn });
    // measure overflow
    const overflow = await page.evaluate((idx) => {
      const el = document.querySelectorAll('.page')[idx];
      return { scrollH: el.scrollHeight, clientH: el.clientHeight };
    }, i);
    const diff = overflow.scrollH - overflow.clientH;
    console.log('p' + (i+1) + ' scroll=' + overflow.scrollH + ' client=' + overflow.clientH + (diff > 2 ? '  ⚠ OVERFLOW +' + diff : ''));
  }

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
