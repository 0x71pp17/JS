// Calculate result safely without eval
function calculate() {
  let expression = document.getElementById('result').value;

  // Prevent empty or invalid input
  if (!expression) {
    document.getElementById('result').value = 'Error';
    return;
  }

  // Allow only numbers, operators (+, -, *, /), and parentheses
  if (!/^[\d+\-*/(). ]+$/.test(expression)) {
    document.getElementById('result').value = 'Invalid';
    return;
  }

  try {
    // Use Function constructor in strict mode for safer evaluation
    let result = Function('"use strict"; return (' + expression + ')')();
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}   
