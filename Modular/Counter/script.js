// Get DOM elements
const counterDisplay = document.getElementById('countLabel');
const incrementBtn = document.getElementById('increaseBtn');
const decrementBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

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
