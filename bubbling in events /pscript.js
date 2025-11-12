let grandparent = document.querySelector(".grandparent");
let parent = document.querySelector(".parent");
let button = document.querySelector('button');

let main = document.querySelector('.main');
window.addEventListener('mousemove' ,(dets)=>{
main.style.transition= 'transition: all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)';  
    main.style.top = dets.clientY + "px";
    main.style.left = dets.clientX + "px";
})
let arrow = document.querySelector(".arrow");

button.addEventListener('click',(dets)=>{
    button.style.backgroundColor = "cadetblue";
    parent.style.transition = "0.4s";
    console.log('button');
    // dets.stopPropagation();
});
parent.addEventListener('click',(dets)=>{
    parent.style.backgroundColor = "hotpink";
     parent.style.transition = "0.4s";
      console.log('parent');
    // dets.stopPropagation();

     setTimeout(() => {
        parent.style.backgroundColor = "blue";
    }, 1400);
});
grandparent.addEventListener('click',(dets)=>{
    grandparent.style.backgroundColor = "silver";
     console.log('grandparent');
    // dets.stopPropagation();
  
} ,true);

// ⭐️ ⭐️ ⭐️ ⭐️ ok learning event capturing by default on nai hunda es krke apa ehny true likh k on kr skde aa pr eh ehna nai use hunda  true likh k ehne on ho jana te ohne pehla chalna sab toh us toh bach fr agr kise hor te true hoya tn ohne chalna otherwise ohi concept follow huna event bubbling da 
