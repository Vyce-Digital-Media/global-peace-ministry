const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('https://www.trae.ai/', { waitUntil: 'networkidle0' });
    
    // Scroll to absolute bottom
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    // Wait for any animations
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Screenshot before
    await page.screenshot({ path: 'trae-before.png', fullPage: true });
    
    // Move mouse near the center-bottom of screen where the text probably is
    await page.mouse.move(720, 800);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Screenshot after
    await page.screenshot({ path: 'trae-after.png', fullPage: true });
    
    await browser.close();
    console.log("Success");
  } catch (err) {
    console.error(err);
  }
})();
