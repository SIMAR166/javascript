let form = document.querySelector('form');
let input = document.querySelectorAll('input');

form.addEventListener('submit',function(details){

   details.preventDefault();
//  let nameValue = document.querySelector('input[name="name"]').value;
//  console.log(nameValue);
//   let emailValue = document.querySelector('input[name="email"]').value;
//  console.log(emailValue);
//    let About = document.querySelector('input[name="about"]').value;
//  console.log(About);
//   let passValue= document.querySelector('input[name="password"]').value;
//  console.log(passValue);

let main = document.createElement('div');
main.classList.add("main-card");
document.body.append(main);

let img = document.createElement('img');
img.classList.add("card-image");
img.setAttribute('src',input[4].value);
main.append(img);

let name = document.createElement('div');
name.textContent = input[0].value;
name.classList.add("card-name");
main.append(name);


let email = document.createElement('div');
email.textContent = input[1].value;
email.classList.add("card-email");
main.append(email);

let about = document.createElement('div');
about.textContent = input[2].value;
about.classList.add("card-about");
main.append(about);
})


