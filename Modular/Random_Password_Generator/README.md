# Random Password Generator

A simple JavaScript password generator with customizable options.

## Key Concepts Covered
- **DOM selection and updating**: `getElementById` accesses form elements; `value` and `textContent` update display.
- **Event listeners**: `addEventListener` responds to user input and button clicks.
- **Variable state management**: Tracks user preferences (length, character types) and generated password.
- **Dynamic string building**: Constructs character set based on user choices.

## Usage
Open `index.html` in a browser. Adjust length, check options, click **Generate**, then **Copy**.

## Security Context
- Uses `Math.random()` for simplicity (not cryptographically secure).
- For production, replace with `crypto.getRandomValues()`.
- Uses `value` instead of `innerHTML`, preventing unintended script execution.
- No external libraries or inputs processed, reducing attack surface.
