// it was all about the callback hurryie you successfully understand this one 


// function meedhedejana( address , takatak){
//     // logic 
// takatak(4)
// }


// meedhedejana('sidhigali',function(details){
// console.log(details)
// })

// function yogawlle(address,count){
// // logic 
// count({males : 0 , females : 12})

// }

// yogawlle ('peeplekol',function(record){
//  console.log(record);
// })



// function afterdelay( time , fnc){
// setTimeout(() => {
//  fnc();   
// },time);}

// afterdelay( 2000,function(){
// console.log("callback printed")
// })

// function getuserpost(id , cb){
// setTimeout(() => {
//     cb(['post1', 'post2', 'post3' , 'post4'])
// }, 1000);
// }

//  function getuser(username,cb){
//     // logic 
// setTimeout(() => {
//     cb({id : 403 , username : "simrat"})
// },1000);
// }
// getuser('simar', function(details){
//  getuserpost(details.id,function(post){
//  console.log(details.username , post)
//  })
// });

//  to practice again do the instagram and the meta wlla cahkar baki tn sab kush saukha hi aa yipee


 function loginuser(cb){
       console.log("account details")
setTimeout(() => {
    cb({ id : 230 , username : "sapna"})
}, 1000);
 }
 function fetchpermissions( idno , cb){
       console.log("following are the permissions that are granted ")
setTimeout(() => {
    cb (['like' , 'share' , 'subscribe' ,'comment'])
}, 1000);
 }
 function loaddashboard(rights , cb){
        console.log(" know the dashboard is loaded ")
setTimeout(() => {
    cb();
}, 1000);
 }

 loginuser(function(logindets){
 
 console.log(logindets)
 fetchpermissions(logindets.id ,function(setofper){
 
 console.log(setofper)
 loaddashboard(setofper, function(){
 console.log("dashboard loaded ");
 })
 })
 })

// promise de vich pending , resolve and the reject 
  let prm = new Promise ((resolve , reject )=>{
   reject();
 })

prm.then(()=>{
    console.log("in resolve state")
})
.catch(()=>{
    console.log(" in reject state ")
})

// fetch('https://randomuser.me/api/')
// // fetch ne hamesha ik raw data not in the readable form
// .then((raw)=> raw.json())
// // now after the conversion to the json the data will be readable and get returned 
// .then((data)=>{
//     console.log(data.results[0].location.city);
// })


// es kam nu hor shota krne lye we use async and the await 
// await is always used with the promises 


async function abcd(){
 let rawdata = await fetch("https://randomuser.me/api/");
  let read = await rawdata.json();
  console.log(read);
 }

abcd();

