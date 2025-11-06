// Get DOM elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lengthValueEl = document.getElementById('lengthValue');
const numbersEl = document.getElementById('numbers');
const specialEl = document.getElementById('special');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

// Update displayed length value in real-time
lengthEl.addEventListener('input', () => {
  lengthValueEl.textContent = lengthEl.value;
});

// Generate password based on user settings
function generatePassword() {
  const length = parseInt(lengthEl.value);
  const includeNumbers = numbersEl.checked;
  const includeSpecial = specialEl.checked;

  // Start with uppercase and lowercase letters
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // Add numbers if selected
  if (includeNumbers) chars += "0123456789";
  // Add special characters if selected
  if (includeSpecial) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Build random password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  // Display generated password
  passwordEl.value = password;
}

// Copy password to clipboard
function copyPassword() {
  if (passwordEl.value) {
    passwordEl.select();
    document.execCommand('copy');
    alert('Password copied!');
  } else {
    alert('Generate a password first!');
  }
}

// Attach event listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);   
