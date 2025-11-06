# Calculator

A simple JavaScript calculator demonstrating core web development concepts with security awareness.

## Key Concepts Covered
- DOM manipulation
- Event handling
- JavaScript functions
- Security defense in code

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
