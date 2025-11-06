const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lengthValueEl = document.getElementById('lengthValue');
const numbersEl = document.getElementById('numbers');
const specialEl = document.getElementById('special');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

// Update length value display
lengthEl.addEventListener('input', () => {
  lengthValueEl.textContent = lengthEl.value;
});

function generatePassword() {
  const length = parseInt(lengthEl.value);
  const includeNumbers = numbersEl.checked;
  const includeSpecial = specialEl.checked;

  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) chars += "0123456789";
  if (includeSpecial) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  passwordEl.value = password;
}

function copyPassword() {
  if (passwordEl.value) {
    passwordEl.select();
    document.execCommand('copy');
    alert('Password copied!');
  } else {
    alert('Generate a password first!');
  }
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);   
