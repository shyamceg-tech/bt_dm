// Render brochure.html → BlueTick_Brochure_2026.pdf via headless Chrome.
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const dir = __dirname;
  const htmlPath = path.join(dir, 'brochure.html');
  const outPath  = path.join(dir, 'BlueTick_Brochure_2026.pdf');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath, { waitUntil: ['load', 'networkidle0'] });

  // wait for fonts
  await page.evaluateHandle('document.fonts.ready');

  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log('Wrote ' + outPath);
})().catch(e => { console.error(e); process.exit(1); });
