// Get DOM elements
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

// Update display with current count
function updateDisplay() {
  counterDisplay.textContent = count;
}

// Increment count
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

// Decrement count
decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

// Reset count to zero
resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

// Initialize display
updateDisplay();   
