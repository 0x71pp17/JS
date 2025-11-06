let startTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalId;

const timeDisplay = document.getElementById('time-display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');

function pad(unit) {
  return String(unit).padStart(2, '0');
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  const secs = Math.floor((elapsedTime / 1000) % 60);
  const mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  timeDisplay.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

startButton.addEventListener('click', () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});

pauseButton.addEventListener('click', () => {
  if (!paused) {
    paused = true;
    clearInterval(intervalId);
  }
});

resetButton.addEventListener('click', () => {
  paused = true;
  clearInterval(intervalId);
  elapsedTime = 0;
  timeDisplay.textContent = '00:00:00';
});
