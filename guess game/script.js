let button = document.querySelector('button');
let image =  document.querySelector( 'img');
let fullname = document.querySelector('p.fullname#team-full');
let captain = document.querySelector('.captain#team-captain');
let short = document.querySelector('h1#team-short');
let card = document.querySelector('.card');

window.addEventListener('click',()=>
{
    // console.log(button);
    // console.log(image);
    // console.log(fullname);
    // console.log(captain);
    // console.log(short);
    // console.log(card);
})
 let array = [{
    image : "https://i.pinimg.com/736x/e0/5f/67/e05f67537b0236c07585943536102ed6.jpg",
    short :"PBKS",
    fullname : "Punjab Kings",
    captain: "Shreyas Iyer", 
 },
{
    image : "https://i.pinimg.com/736x/89/28/c0/8928c02c5538fe52f15b19d5d07f679b.jpg",
    short :"KKR",
    fullname : "Kolkata Knight Riders",
    captain: " Ajinkya Rahane", 

},

{
    image : "https://i.pinimg.com/736x/b1/fe/a8/b1fea871b4f771b6649f895f868094eb.jpg ",
    short :" MI",
    fullname : "Mumbai Indians",
    captain: "Hardik Pandya ", 
},


{
    image : "https://i.pinimg.com/736x/e1/2d/08/e12d08ae838347bd91a868107ab8aada.jpg ",
    short :"RCB",
    fullname : "Royal Challengers Bengaluru ",
    captain: "Rajat Patidar", 
},

{
    image : "https://i.pinimg.com/1200x/4c/df/b8/4cdfb868449f640377119ccc434ab90a.jpg ",
    short :" GT",
    fullname : "Gujarat Titans ",
    captain: "Shubman Gill ", 
},
{
    image : "https://i.pinimg.com/1200x/f1/15/68/f11568920ffd1dede633e0a5558e1b1f.jpg ",
    short :"RR",
    fullname : "Rajasthan Royals",
    captain: "Sanju Samson ", 
},
];

button.addEventListener('click',()=>
{


 let random = Math.floor(Math.random()*array.length);
 console.log(array[random]);
    fullname.textContent = `${array[random].fullname}`
    short.textContent = `${array[random].short}`
    captain.textContent = `${array[random].captain}`
    image.setAttribute('src',`${array[random].image}`);

})