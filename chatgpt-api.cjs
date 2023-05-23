const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

(async () => {
  try {
    puppeteer.launch({ headless: false }).then(async browser => {
        console.log('Running tests..')
        const page = await browser.newPage()
        await page.goto('https://chat.openai.com');
      })
  } catch (error) {
    console.log(error);
  }
})();
