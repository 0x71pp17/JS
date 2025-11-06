// Get DOM elements
const timeDisplay = document.getElementById('time-display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');

// Track time state
let startTime = 0;        // Timestamp when started
let elapsedTime = 0;      // Total elapsed time in ms
let paused = true;        // Pause state
let intervalId;           // Interval reference for clearing

// Format number to always show 2 digits
function pad(unit) {
  return String(unit).padStart(2, '0');
}

// Update display with current time
function updateTime() {
  elapsedTime = Date.now() - startTime;
  const secs = Math.floor((elapsedTime / 1000) % 60);
  const mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  timeDisplay.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

// Start the stopwatch
startButton.addEventListener('click', () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});

// Pause the stopwatch
pauseButton.addEventListener('click', () => {
  if (!paused) {
    paused = true;
    clearInterval(intervalId);
  }
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
  paused = true;
  clearInterval(intervalId);
  elapsedTime = 0;
  timeDisplay.textContent = '00:00:00';
});   
