let inp = document.querySelector("input");
inp.addEventListener('input',function(details){
    if(details.data !== null){
        console.dir(details.data);
    }
})
// pehla check kreya k change kidr nu lgda console.details krke 
// jithe addEventlistener aa gya mtlb ap ohde function ch kush value de skde a done ☑️

let h1 = document.querySelector('h1');
let sec = document.querySelector("select");
sec.addEventListener("change",function(details){
    console.log(details.target.value);
    h1.textContent = `${details.target.value} user ne add krta apni basket ch congratulations ` ;
    h1.style.color='hotpink';
//     // console te dekhan lye k jd mai different values nu select krdi aa tn kida values ne show huna
//     // harsh sir kehnde k pehla likh lvo details bach figure out kro scroll kr kr k ke change kidr lgda a 
})

 let h2 = document.querySelector('h2');
window.addEventListener('keydown',function(details){
    if(details.key===" "){
        h2.textContent='space';
    }
    else{
 h2.textContent = details.key;
    }
})
 let pehla = document.querySelector(' #pehla');
 let input = document.querySelector('.in h4');
 input.addEventListener("click",function(){
    pehla.click();
 })
 pehla.addEventListener("change",function(details){
    console.log(details.target.files[0].name);
    input.textContent= `${details.target.files[0].name}`;
 })

 

 