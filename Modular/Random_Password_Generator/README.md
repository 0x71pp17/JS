# Random Password Generator

A simple JavaScript password generator with customizable options.

## Key Concepts Covered
- **DOM selection and updating**: `getElementById` accesses form elements; `value` and `textContent` update display.  
- **Event listeners**: `addEventListener` responds to user input and button clicks.  
- **Variable state management**: Tracks user preferences (length, character types) and generated password.  
- **Dynamic string building**: Constructs character set based on user choices.  
- **Form input handling**:  
  - `specialEl.checked` reads the boolean state of a checkbox (true/false).  
  - `parseInt(lengthEl.value)` converts the slider’s string value into an integer.  
- **Clipboard interaction**:  
  - `passwordEl.value` gets or sets the text in the password field.  
  - `passwordEl.select()` selects all text for copying.  
  - `document.execCommand('copy')` executes the copy command (legacy method).  
  - Modern alternative: `navigator.clipboard.writeText()` (preferred, but requires HTTPS and user permission).  
- **Cryptographically secure randomness**: Uses `crypto.getRandomValues()` with `Uint32Array` to generate secure random indices. `Uint32Array` is a JavaScript typed array that holds 32-bit unsigned integers (0 to 4,294,967,295), ensuring high-quality randomness for password generation.  
  - `crypto.getRandomValues()` is part of **Web Crypto API**, a browser-built interface for secure cryptographic operations.  
  - It runs **locally**—no network requests are made.  
  - The term "API" refers to its role as a standardized **programming interface** to access the browser’s underlying cryptographic capabilities.  
  - Leverages OS-level entropy sources (e.g., `/dev/urandom` on Linux, `BCryptGenRandom` on Windows, `Secure Enclave` on macOS) for true unpredictability.



## Usage
Open `index.html` in a browser. Adjust length, check options, click **Generate**, then **Copy**.

## Security Context
- Instead of using `Math.random()`, the **`crypto.getRandomValues()`** method is used for **cryptographically secure randomness**.
- `crypto.getRandomValues()` is a **Web Crypto API** method, providing high-entropy random values suitable for security-sensitive tasks like password generation.  
  - Here, it's used as a replacement of `Math.random()` for cryptographically secure randomness.
- Prevents predictable password generation.
- Uses `value` instead of `innerHTML`, preventing unintended script execution.
- No external libraries or inputs processed, reducing attack surface.
