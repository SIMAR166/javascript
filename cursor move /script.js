 let body = document.body;
  let image = document.querySelector('.cursor-img')
body.addEventListener('mousemove',(dets)=>{
     console.log(dets);
        image.style.top = dets.y  + "px";
        image.style.left = dets.x + "px";
})