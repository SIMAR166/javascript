// # Day 63 — Project Scenarios

// API example (OpenWeatherMap):

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

// ---

// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.

// ---

//  this is with the use of the then 

// function getweather (city){

//     let apikey = `0b7707d3feefd704094b1c11a37f50c7`
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).then((raw)=> raw.json())
//     .then((real )=>{
//         console.log(real)
//     })
    
// }
// getweather("london")

// know lets work with the async and the await 

 async function getweather (city){
 try{
       let apikey = `0b7707d3feefd704094b1c11a37f50c7`
     let  raw = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)

     if(!raw.ok){
        // raw.ok check that is the data that is fetch is valid or not 
        throw new Error ( " somethimg went wrong please try again later ")
     }
  let real =  await raw.json()
//   to write await here is important so that this line does not run before the fetch 
  if(real.main.temp < 0){
    console.log(` temperature is very low ${real.main.temp}`)
  }
  else if (real.main.temp > 40){
    console.warn(" too hot hai ehdr toh ")
  }
  else {
    console.log(real)
  }
    
 }
 catch(err){
 console.log( err)
 }
 
}
getweather("leh") 
// as if any invalid country then handle that with the try and the catch block 
// getweather("london")


const user = [
    "kang12@gmail.com",
    "kang23@gmail.com",
    "kang34@gmail.com",
]


function sendemail(email){
    return new Promise((resolve,reject)=>  {
        let time = Math.floor(Math.random()*3);

        setTimeout(() => {
  let probility = Math.floor(Math.random()*10);
  console.log("probility:", probility);

  if(probility < 5){
    // console.log("IF BLOCK");
    resolve(`email send ${probility}`);
  } else {
    // console.log("ELSE BLOCK");
    reject(`email not send ${probility}`);
  }
}, time * 1000);

    })
}
// sendemail("kang12@gmail.com").then((data)=>{
//  console.log(data)
// })
// .catch((err)=>{
//  console.log(err)
// })



    async  function sendemails(userlist){
  let  response = userlist.map( function (email){
    return sendemail(email)
    .then((data)=>{
       return data 
    })
    .catch((err)=>{
  return err
    })
    
    
  })
 console.log(response)

  let ans =  await Promise.all(response)
  console.log(ans)

     ans.forEach(status => {
         console.log(status)
     });
     }
  

sendemails(user)