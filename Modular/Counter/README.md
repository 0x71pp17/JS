# Counter App

A simple JavaScript counter

## Key Concepts Covered
- **DOM selection and updating**: `document.getElementById('counter')` selects the element; `counterDisplay.textContent = count` updates it.  
- **Event listeners**: `incrementBtn.addEventListener('click', ...)` attaches click behavior to buttons.  
- **Variable state management**: The `count` variable holds the current value, persisted in memory across interactions.
- Code clarity with comments

## Usage
Open `index.html` in a browser. Click buttons to increment, decrement, or reset the counter.

## Security Context
This app does not process user input or dynamic expressions, so it avoids risks like code injection. It safely manipulates only predefined elements and values.
