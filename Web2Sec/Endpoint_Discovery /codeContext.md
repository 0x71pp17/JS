## Code Explanation

### `const puppeteer = require('puppeteer');`
Imports the Puppeteer library, which controls a headless Chrome browser for page interaction and network monitoring.

### `async function discoverEndpoints(url)`
Defines an asynchronous function to handle time-consuming operations like page loading and requests.

### `const browser = await puppeteer.launch();`
Launches a headless Chrome instance to navigate the target website.

### `const page = await browser.newPage();`
Creates a new browser tab for loading and analyzing the site.

### `await page.goto(url, { waitUntil: 'networkidle2' });`
Navigates to the target URL and waits until network activity stabilizes to ensure all content loads.

### `const links = await page.$$eval('a[href]', as => as.map(a => a.href));`
Extracts all hyperlink URLs from the page using a DOM selector and returns them as an array.

### `const endpoints = new Set();`
Creates a collection to store unique discovered endpoints, avoiding duplicates.

### `page.on('request', req => { ... });`
Listens to all network requests—allows filtering to focus only on JavaScript files.

### `await page.setRequestInterception(true);`
Enables interception of requests so scripts can be captured and analyzed.

### `const response = await page.goto(url);`
Reloads the page to trigger request interception and capture JS resources.

### `const jsContent = await response.text();`
Retrieves the raw text of the page or JS file to scan for potential endpoints.

### `const endpointRegex = /['"](\/[^\s'"]*)['"]/g;`
Defines a regular expression to match strings that look like API paths or routes.

### `while ((match = endpointRegex.exec(jsContent))) { endpoints.add(match[1]); }`
Searches through the JS content and adds each matched path to the endpoints set.

### `console.log('Discovered endpoints:', Array.from(endpoints).sort());`
Outputs the final list of unique, sorted endpoints for analysis.

### `discoverEndpoints('https://example.com');`
Calls the function with the target URL—user must replace this with their intended site.   
