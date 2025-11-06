# Parameter Analysis Tool

Extracts query parameters and form fields from web pages to identify potential injection points.

## Setup
1. **Check Node.js and npm versions**:
   ```bash
   node -v
   npm -v
   ```
   Both commands should display versions. If not, install Node.js from [nodejs.org](https://nodejs.org), which includes npm.

2. **Install Puppeteer**:
   ```bash
   npm install puppeteer
   ```

3. The script file is already named `extractParams.js` in the repository.

## Usage
Run the script with Node.js:
```bash
node extractParams.js
```

> Replace `'https://example.com'` with the target URL within the JS code before running the script.


## Code Explanation
- `require('puppeteer')`: Imports browser automation library.
- `page.$$eval('a[href]'...)`: Extracts all links to analyze query strings.
- `new URL(link)` and `searchParams`: Parses and collects query parameters.
- `form.querySelectorAll(...)`: Gathers input field names from forms.
- Outputs discovered parameters and form structures for security testing.


## Notes
⚠️ This script is intended for ethical (**`authorized & permissioned`**) security research purposes only.



