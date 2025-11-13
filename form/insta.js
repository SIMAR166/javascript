document.addEventListener('DOMContentLoaded', () => {
  const urname = document.querySelector('input[name="name"]');
  const createpassword = document.querySelector('input[name="createpassword"]');
  const email = document.querySelector('input[name="email"]');
  const repeatpassword = document.querySelector('input[name="resetpassword"]');

  const forspan = document.querySelector('.forspan');
  const foremail = document.querySelector('.foremail');
  const forpass1 = document.querySelector('.forpass1');
  const forpass2 = document.querySelector('.forpass2');

  // safer name regex: letters, spaces, apostrophe, hyphen, dot (basic and compatible)
  const checkname = /^[A-Za-z][A-Za-z .'’-]{0,48}[A-Za-z]$/;
  const checkemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  // strong password: min 8, at least one lower, one upper, one digit, one special
  const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  function showMessage(container, text, color) {
    container.innerHTML = '';
    const el = document.createElement('small');
    el.textContent = text;
    el.style.color = color;
    container.appendChild(el);
  }

  // validate one field only when user types
  urname.addEventListener('input', () => {
    const v = urname.value.trim();
    if (v === '') { forspan.innerHTML = ''; return; }
    if (checkname.test(v)) showMessage(forspan, '✅ Looks good', 'green');
    else showMessage(forspan, '❌ Enter a valid full name', 'red');
  });

  email.addEventListener('input', () => {
    const v = email.value.trim();
    if (v === '') { foremail.innerHTML = ''; return; }
    if (checkemail.test(v)) showMessage(foremail, '✅ Valid email', 'green');
    else showMessage(foremail, '❌ Invalid email address', 'red');
  });

  createpassword.addEventListener('input', () => {
    const v = createpassword.value;
    if (v.trim() === '') { forpass1.innerHTML = ''; return; }
    if (password.test(v)) showMessage(forpass1, '✅ Strong password', 'green');
    else showMessage(forpass1, '❌ Min 8 chars, upper, lower, digit & symbol', 'red');

    // also update the repeat password message live (if user typed password after confirm)
    if (repeatpassword.value.trim() !== '') {
      if (repeatpassword.value === v) showMessage(forpass2, '✅ Passwords match', 'green');
      else showMessage(forpass2, '❌ Passwords do not match', 'red');
    }
  });

  repeatpassword.addEventListener('input', () => {
    const v = repeatpassword.value;
    if (v.trim() === '') { forpass2.innerHTML = ''; return; }
    if (v === createpassword.value) showMessage(forpass2, '✅ Passwords match', 'green');
    else showMessage(forpass2, '❌ Passwords do not match', 'red');
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // final trimmed values
    const nameV = urname.value.trim();
    const emailV = email.value.trim();
    const passV = createpassword.value;
    const repV = repeatpassword.value;

    // clear UI messages first
    forspan.innerHTML = ''; foremail.innerHTML = ''; forpass1.innerHTML = ''; forpass2.innerHTML = '';

    // show messages for all fields (so user knows what failed)
    let ok = true;

    if (nameV === '') { showMessage(forspan, '❌ Name required', 'red'); ok = false; }
    else if (!checkname.test(nameV)) { showMessage(forspan, '❌ Enter a valid full name', 'red'); ok = false; }
    else showMessage(forspan, '✅ Looks good', 'green');

    if (emailV === '') { showMessage(foremail, '❌ Email required', 'red'); ok = false; }
    else if (!checkemail.test(emailV)) { showMessage(foremail, '❌ Invalid email', 'red'); ok = false; }
    else showMessage(foremail, '✅ Valid email', 'green');

    if (passV === '') { showMessage(forpass1, '❌ Password required', 'red'); ok = false; }
    else if (!password.test(passV)) { showMessage(forpass1, '❌ Weak password', 'red'); ok = false; }
    else showMessage(forpass1, '✅ Strong password', 'green');

    if (repV === '') { showMessage(forpass2, '❌ Please confirm password', 'red'); ok = false; }
    else if (passV !== repV) { showMessage(forpass2, '❌ Passwords do not match', 'red'); ok = false; }
    else showMessage(forpass2, '✅ Passwords match', 'green');

    if (!ok) {
      // prevent submission and let user correct errors
      return;
    }

    // All good -> simulate signup
    alert('🎉 Signed up successfully.');
    form.reset();
    forspan.innerHTML = ''; foremail.innerHTML = ''; forpass1.innerHTML = ''; forpass2.innerHTML = '';
  });
});