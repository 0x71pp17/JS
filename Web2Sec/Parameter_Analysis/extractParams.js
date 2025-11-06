// Import Puppeteer library for browser automation
const puppeteer = require('puppeteer');

// Define async function to extract parameters from the given URL
async function extractParams(url) {
  // Launch a headless browser instance
  const browser = await puppeteer.launch();
  // Open a new page/tab
  const page = await browser.newPage();
  // Set to capture and store unique parameters
  const params = new Set();

  // Navigate to the target URL and wait for network to idle
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Extract all links from the page
  const links = await page.$$eval('a[href]', as => as.map(a => a.href));
  // Parse each link to collect query parameters (e.g., ?id=123)
  links.forEach(link => {
    const urlObj = new URL(link);
    urlObj.searchParams.forEach((value, key) => {
      params.add(`${key}=${value}`);
    });
  });

  // Extract form details: action, method, and input field names
  const forms = await page.$$eval('form', forms =>
    forms.map(form => {
      const action = form.action; // Form submission URL
      const method = form.method; // HTTP method (GET/POST)
      // Get all input, select, and textarea field names
      const inputs = Array.from(form.querySelectorAll('input, select, textarea'))
        .map(input => input.name)
        .filter(name => name); // Exclude unnamed fields
      return { action, method, inputs };
    })
  );

  // Output discovered query parameters and form structures
  console.log('Discovered Parameters:', Array.from(params));
  console.log('Form Fields:', forms);

  // Close the browser
  await browser.close();
}

// Replace 'https://example.com' with the target URL before running the script
extractParams('https://example.com');   
