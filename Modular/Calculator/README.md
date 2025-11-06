# Calculator

A simple JavaScript calculator
- **Basic arithmetic operations**: Supports addition, subtraction, multiplication, and division using dedicated buttons.  
- **Input from buttons**: Users enter numbers and operators via on-screen buttons for mouse/touch interaction.  
- **Clear and delete functions**: "C" resets the display; "DEL" removes the last character.  
- **Result calculation**: Evaluates expressions using a secure alternative to `eval()` to prevent code injection.  
- **Visual feedback**: Clear button layout with distinct styling for operators and digits.  
- **Error handling**: Displays "Error" for invalid expressions, improving user experience.


## Code Context - Core Concepts Implemented
- **DOM manipulation**: `document.getElementById('result')` selects the display; `value` updates it.
- **Event listeners**: `onclick="display('1')"` and `calculate()` respond to button clicks.
- **Variable state management**: `expression` holds input history; `calculate()` processes state safely.
- **Security defense in code**: Uses `Function` constructor and regex validation to avoid `eval()` risks.


## Usage
Open `index.html` in any modern browser. No dependencies required.

## Security Context
In place of using `eval()` to calculate result, the following is used for security:
```js
Function('"use strict"; return (' + expression + ')')();
```
This avoids direct `eval()` while safely evaluating math expressions.

Input is validated with `/^[\d+\-*/(). ]+$/` to block unsafe characters, mitigating code injection.

> ⚠️ **Security Note**: While `Function` is safer than `eval()`, it's not bulletproof. Some engines may execute malicious code during parsing. Additional security can be gained by using dedicated math libraries like [math.js](https://mathjs.org/) or [js-expression-eval](https://github.com/silentmatt/js-expression-eval), which parse expressions without relying on JavaScript's execution engine.

