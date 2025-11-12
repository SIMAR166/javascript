const form = document.querySelector('#userForm');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const age = document.querySelector('#age');

const messagename = document.querySelector('.messagename');
const messagepass = document.querySelector('.messagepass');
const messageemail = document.querySelector('.messageemail');
const messageage = document.querySelector('.messageage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // clear old messages
  document.querySelectorAll('small').forEach(s => s.remove());

  // regex patterns
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // validation flags
  let valid = true;

  // username
  if (usernameRegex.test(username.value)) {
    showMessage(messagename, "✅ Username looks good!", "green");
  } else {
    showMessage(messagename, "❌ Username must be 3–15 characters (letters, numbers, or _)", "red");
    valid = false;
  }

  // password
  if (passwordRegex.test(password.value)) {
    showMessage(messagepass, "✅ Strong password!", "green");
  } else {
    showMessage(messagepass, "❌ Password must include uppercase, lowercase, number & symbol", "red");
    valid = false;
  }

  // email
  if (emailRegex.test(email.value)) {
    showMessage(messageemail, "✅ Valid email address!", "green");
  } else {
    showMessage(messageemail, "❌ Invalid email format!", "red");
    valid = false;
  }

  // age
  if (age.value >= 13 && age.value <= 120) {
    showMessage(messageage, "✅ Age accepted!", "green");
  } else {
    showMessage(messageage, "❌ Age must be between 13 and 120", "red");
    valid = false;
  }

  // clear inputs only if everything is valid
  if (valid) {
    document.querySelectorAll('input').forEach(input => input.value = "");
  }
});

// helper to show message
function showMessage(container, text, color) {
  const msg = document.createElement('small');
  msg.textContent = text;
  msg.style.color = color;
  container.append(msg);
}