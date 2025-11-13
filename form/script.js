
let urname = document.querySelector('input[name="name"]');
let createpassword = document.querySelector('input[name="createpassword"]');
let email = document.querySelector('input[name="email"]');
let repeatpassword = document.querySelector('input[name="resetpassword"]');
let forspan = document.querySelector('.forspan');
let foremail = document.querySelector('.foremail');
let forpass1 = document.querySelector('.forpass1');
let forpass2 = document.querySelector('.forpass2');

const checkname = /^\p{L}[\p{L}'\-. ]{0,48}\p{L}$/u
const checkemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/


const form = document.querySelector('form');
form.addEventListener('submit', (dets) => {
    dets.preventDefault();

        forspan.innerHTML = "";
        foremail.innerHTML = "";
        forpass1.innerHTML = "";
        forpass2.innerHTML = "";

   

    function message(text, color) {
        const element = document.createElement('small');
        element.textContent = text;
        element.style.color = color;
        return element;
    }
    l
    // this part is for the username
    if (checkname.test(urname.value)) {
        forspan.append(message('valid username ', 'green '));
        // function call 
    }
    else {
        forspan.append(message('username is not valid ', 'red'))
    }


    // this part is for the email 

    if (checkemail.test(email.value)) {
        foremail.append(message('valid email address ', 'green '));
    }
    else {
        foremail.append(message('email  is not valid ', 'red'))
    }

    // this part is for the password 

    if (password.test(createpassword.value)) {
        forpass1.append(message('valid password ', 'green '));
        console.log(createpassword.value);
    }
    else {
        forpass1.append(message(' password  is not valid ', 'red'))
    }

    // this part is for repeating the password 

    if ((password.test(repeatpassword.value) && (createpassword.value === repeatpassword.value))) {
        forpass2.append(message('your password is correct', 'green '));
    }
    else {
        forpass2.append(message('try again  ', 'red'))
    }
    //   forspan.innerHTML = "";
    //     foremail.innerHTML = "";
    //     forpass1.innerHTML = "";
    //     forpass2.innerHTML = "";

    if (
        checkname.test(urname.value) &&
        checkemail.test(email.value) &&
        password.test(createpassword.value) &&
        createpassword.value === repeatpassword.value) {

        
    }
})
form.reset()



// enter krdi ik input te tn duji pehle invalid how hon lg janiyan 


