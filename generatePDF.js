const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(`
    <h1>Form Data</h1>
    <p>Name: John Doe</p>
    <p>Email: john@example.com</p>
  `);

    await page.pdf({ path: 'output.pdf', format: 'A4' });

    await browser.close();
})();