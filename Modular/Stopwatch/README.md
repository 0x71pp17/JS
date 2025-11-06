# Stopwatch

A simple JavaScript stopwatch
- **Starts and stops the timer**: Begin timing with the Start button and pause at any point using the Stop button, preserving elapsed time. 
- **Resets to zero**: Return the display to `00:00:00` with the Reset button, clearing all stored time values.  
- **Displays hours, minutes, and seconds**: Updates the time in `HH:MM:SS` format using `textContent` for secure, efficient rendering.  
- **Real-time timekeeping**: Uses `setInterval(updateTime, 75)` to refresh the display every 75ms for smooth visual feedback.  
- **Accurate elapsed time tracking**: Calculates time difference using `Date.now()` to ensure precision across start/pause cycles.  
- **User-controlled state management**: Tracks `paused`, `startTime`, and `elapsedTime` to maintain correct state between interactions.  
- **Event-driven interface**: Uses `addEventListener` to respond to button clicks, enabling responsive user interaction.



## Code Context - Core Concepts Implemented
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
