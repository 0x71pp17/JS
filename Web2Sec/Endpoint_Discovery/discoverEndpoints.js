const puppeteer = require('puppeteer');

async function discoverEndpoints(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const endpoints = new Set();

  // Collect links from HTML
  await page.goto(url, { waitUntil: 'networkidle2' });
  const links = await page.$$eval('a[href]', as => as.map(a => a.href));
  links.forEach(link => endpoints.add(new URL(link).pathname));

  // Extract endpoints from JavaScript files
  await page.setRequestInterception(true);
  page.on('request', req => {
    if (req.resourceType() === 'script') {
      req.continue();
    } else {
      req.abort();
    }
  });

  const response = await page.goto(url);
  const jsContent = await response.text();
  const endpointRegex = /['"](\/[^\s'"]*)['"]/g;
  let match;
  while ((match = endpointRegex.exec(jsContent))) {
    endpoints.add(match[1]);
  }

  console.log('Discovered endpoints:', Array.from(endpoints).sort());
  await browser.close();
}

// Replace 'https://example.com' with the target URL you want to scan
discoverEndpoints('https://example.com');    
