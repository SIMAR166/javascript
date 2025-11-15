let btn1 = document.querySelector('.btn1 button');
let btn2 = document.querySelector('.btn2 button');
let reset = document.querySelector('.reset button');
let h2 = document.querySelector('h2');
let count = 0;
h2.append(count);

btn1.addEventListener('click', function () {
    btn1.style.backgroundColor = "pink";
    btn2.style.display = 'block';
    count++;
    h2.textContent = count;
})
btn2.addEventListener('click', function () {
    btn2.style.backgroundColor = "aqua";
     count--;
    if (count >= 0) {
       
        h2.textContent = count;
    }

    if(count===0){
        btn2.style.display = 'none';
    }

    console.log(count);

})

reset.addEventListener('click',function(){
    h2.textContent = count = 0;
})

