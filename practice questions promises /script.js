//  done with the practice questions of the promises and the asyn await 

function calculate(a, b, cb) {
    let sum = a + b;
    cb(sum);
}

calculate(5, 10, function (result) {
    console.log(result);
});

// 👉 Task:
// 	•	Which function is the callback?
// cb
// 	•	Who is calling the callback?
// calculate
// 	•	When is it executed?
// after the addition 


function getData(cb) {
    setTimeout(() => {
        cb("Data received");
    }, 1000);
}

getData("hello", function (msg) {
    console.log(msg);
});

// 👉 Task:
// 	•	Why is this wrong?
// bcz in the function call the getdata function accepts the two parameters while in the function defiantion there is only one parameter 
// 	•	Write the correct function call

function getData(cb) {
    setTimeout(() => {
        cb("Data received");
    }, 1000);
}

getData(function (msg) {
    console.log(msg);
});


function loginUser(cb) {
    setTimeout(() => {
        cb({ id: 1, name: "Simar" });
    }, 1000);
}

function loadProfile(userId, cb) {
    setTimeout(() => {
        cb("Profile loaded for user " + userId);
    }, 1000);
}

// 👉 Task:
// 	•	Call loadProfile only after loginUser
// 	•	Observe how nesting starts (callback hell feeling)
loginUser(function (logindetails) {
    console.log(logindetails)
    loadProfile(logindetails.id, function (profile) {
    })
})


function getNumber() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 500);
  });
}
// Task:
// 	•	async function banao
// 	•	await se value lo
// 	•	Output print karo
  async function run(){
  let ans = await getNumber();
  console.log(ans);
  }

run();

function getMessage() {
  return new Promise(resolve => {
    resolve("Hello Async Await");
  });
}
// Task:
// 	•	await use karo
// 	•	Message print karo
 async function kush(){
  let msg = await getMessage()
  console.log(msg);
 }

kush();
 function loginUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 7 }), 500);
  });
}

function getPermissions(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["read", "write"]), 500);
  });
}

// Task:
// 	•	Pehle loginUser
// 	•	Uske baad getPermissions
// 	•	Final permissions print karo
async function star(){
 let login = await loginUser()
  let permission = await getPermissions(login.id);
  console.log(permission)
}
star()

function getA() {
  return new Promise(resolve => setTimeout(() => resolve("A"), 300));
}

function getB() {
  return new Promise(resolve => setTimeout(() => resolve("B"), 300));
}
// Task:
// 	•	Dono ko await karo
// 	•	Output: A B
async  function sim(){
    let  k=  await getA();
    let b = await getB();
    console.log(k + b )
}

sim()
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) resolve("Allowed");
    else reject("Not Allowed");
  });
}
// Task:
// 	•	await checkAge(16)
// 	•	Error ko catch karo
// 	•	Proper message print karo
 async function validate(){
    try{
          let age = await checkAge(16)
  console.log(age);
    }
    
    catch( error){
 console.log(error)
    }
//   handle it with try and the catch 
 }
validate()

 function fakeApi() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data Loaded"), 1000);
  });
}
// Task:
// 	•	Async function banao
// 	•	await fakeApi()
// 	•	Print: "Dashboard Ready"
async function kushkush(params) {
     let lush =  await fakeApi();
     console.log("Dashboard Ready")
}

kushkush()
function loadData() {
  let data = await fetch("https://example.com");
  console.log(data);
}

// Task:
// 	•	Error identify karo
//  error is that no async function is being used here 
// 	•	Correct async/await code likho
 async function loadData() {
  let data = await fetch("https://example.com");
  console.log(data);
}
loadData()