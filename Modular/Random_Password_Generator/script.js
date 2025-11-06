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

// Generate cryptographically secure password
function generatePassword() {
  const length = parseInt(lengthEl.value);
  const includeNumbers = numbersEl.checked;
  const includeSpecial = specialEl.checked;

  // Build character set based on user options
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) chars += "0123456789";
  if (includeSpecial) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Use crypto.getRandomValues for secure randomness
  const randomValues = new Uint32Array(length);
  window.crypto.getRandomValues(randomValues);

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = randomValues[i] % chars.length;
    password += chars[randomIndex];
  }
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
