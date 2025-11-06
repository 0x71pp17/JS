// Display input or operator on screen
function display(value) {
  document.getElementById('result').value += value;
}

// Clear entire display
function clearScreen() {
  document.getElementById('result').value = '';
}

// Remove last character
function backspace() {
  let currentValue = document.getElementById('result').value;
  document.getElementById('result').value = currentValue.slice(0, -1);
}

// Calculate result using eval()
function calculate() {
  let expression = document.getElementById('result').value;
  try {
    let result = eval(expression);
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}   
