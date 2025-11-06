# Stopwatch

A simple JavaScript stopwatch

## Key Concepts Covered
- **DOM selection and updating**: `document.getElementById('time-display')` selects the display; `textContent` updates it.
- **Event listeners**: `addEventListener('click', ...)` handles button interactions.
- **Variable state management**: `elapsedTime`, `paused`, and `intervalId` track runtime state.
- **Time formatting**: `pad()` ensures consistent display with leading zeros.

## Usage
Open `index.html` in a browser. Use **Start**, **Pause**, and **Reset** buttons to control the timer.

## Security Context
- Uses `textContent` instead of `innerHTML`, preventing unintended script execution.
- No user input is processed, eliminating injection risks.
- Safe, synchronous logic with no external dependencies.
