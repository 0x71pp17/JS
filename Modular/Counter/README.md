# Counter App

A simple JavaScript counter
- **Increment and decrement controls**: Buttons increase or decrease the counter by 1 with each click.  
- **Reset functionality**: A dedicated button resets the count to zero. 
- **Real-time display**: The current count is shown in a central display, updated instantly using `textContent`.  
- **User interface**: Layout with visually distinct buttons (e.g., color-coded for action type).  
- **State persistence**: The `count` variable maintains the current value across interactions.  
- **Event-driven interaction**: Clicks are handled via `addEventListener`.  
- **No external dependencies**: Built with vanilla JavaScript, HTML, and CSS for broad compatibility.


## Code Context - Core Concepts Implemented
- **DOM selection and updating**: `document.getElementById('countLabel')` selects the element; `counterDisplay.textContent = count` updates it.  
- **Event listeners**: `incrementBtn.addEventListener('click', ...)` attaches click behavior to buttons.  
- **Variable state management**: The `count` variable holds the current value, persisted in memory across interactions.
- Code clarity with comments

## Usage
Open `index.html` in a browser. Click buttons to increment, decrement, or reset the counter.

## Security Context
This app does not process user input or dynamic expressions, so it avoids risks like code injection. It safely manipulates only predefined elements and values.

- Uses `textContent` instead of `innerHTML` to update the display.
- `textContent` treats content as **plain text**, preventing unintended execution of scripts.
- This avoids **XSS vulnerabilities** that could occur if HTML content were parsed.
- Recommended for security and performance when handling non-HTML content.

