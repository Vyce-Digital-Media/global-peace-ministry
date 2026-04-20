const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('https://www.trae.ai/', { waitUntil: 'networkidle0' });
  const canvases = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('canvas')).map(c => ({
      width: c.width,
      height: c.height,
      className: c.className,
      id: c.id,
      parentHtml: c.parentElement.innerHTML.substring(0, 200)
    }));
  });
  console.log(JSON.stringify(canvases, null, 2));
  await browser.close();
})();
