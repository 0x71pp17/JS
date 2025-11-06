// extractParams.js
const puppeteer = require('puppeteer');

async function extractParams(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const params = new Set();

  // Navigate to the page
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Extract query parameters from URLs in links
  const links = await page.$$eval('a[href]', as => as.map(a => a.href));
  links.forEach(link => {
    const urlObj = new URL(link);
    urlObj.searchParams.forEach((value, key) => {
      params.add(`${key}=${value}`);
    });
  });

  // Extract form fields
  const forms = await page.$$eval('form', forms =>
    forms.map(form => {
      const action = form.action;
      const method = form.method;
      const inputs = Array.from(form.querySelectorAll('input, select, textarea'))
        .map(input => input.name)
        .filter(name => name);
      return { action, method, inputs };
    })
  );

  console.log('Discovered Parameters:', Array.from(params));
  console.log('Form Fields:', forms);

  await browser.close();
}

// Replace 'https://example.com' with the target URL
extractParams('https://example.com');   
