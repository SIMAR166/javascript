let form =document.querySelector('form');
let username = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let age = document.querySelector('#age');
let messagepass = document.querySelector('.messagepass')
let messagename = document.querySelector('.messagename')
let messageemail = document.querySelector('.messageemail')
let messageage = document.querySelector('.messageage')
let input = document.querySelector('input')

form.addEventListener('submit',(dets)=>{
    dets.preventDefault(); // ⛔

    document.querySelectorAll('h6').forEach(h6 => h6.style.display = 'none');
    const regex = /^[a-zA-Z0-9_]{3,15}$/; 
    if(regex.test(username.value)=== true){
        console.log(' username is valid ');
         let show =document.createElement('small');
        show.textContent="your username  is valid"; 
      messagename.append(show);
    }
    else{
        console.log('invalid username');
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     if(passwordRegex.test(password.value)=== true){
        let show1 =document.createElement('small');
        show1.textContent="your password is valid"; 
      messagepass.append(show1);
        console.log(' valid password');
    }
    else{
        console.log(' invalid password');
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if(emailRegex.test(email.value)=== true){
        console.log(' valid email id ');
         let show2 =document.createElement('small');
        show2.textContent="your email  is valid"; 
      messageemail.append(show2);
    }
    else{
        console.log(' invalid email id ');
    }

if (age.value >= 13 && age.value <= 120) {
  console.log("✅ Valid age");
   let show3 =document.createElement('small');
        show3.textContent="your age is valid "; 
      messageage.append(show3);
} else {
  console.log("❌ Invalid age");
}

 input.forEach((input)=> {
    input.value=""
})
})

 