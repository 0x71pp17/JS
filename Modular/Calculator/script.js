function display(value) {
  document.getElementById('result').value += value;
}

function clearScreen() {
  document.getElementById('result').value = '';
}

function backspace() {
  let currentValue = document.getElementById('result').value;
  document.getElementById('result').value = currentValue.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById('result').value;
  try {
    let result = eval(expression);
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}   
