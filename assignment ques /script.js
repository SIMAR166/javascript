// 😁🍻
// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// user - age - number string blank cancel  step 2 check eligible or not ok done 

//  let age =prompt("enter your age ");
// if(age===null) console.error  ("you cancel ");
// else{
//     if(age.trim()===""){
//         console.error("you enter the blank string ");
//     }
//     else{
//  age =Number(age);
// //  as we convert the age in the number so the leading  and the trailing spaces got removed 
//         if(isNaN(age)){
//             console.error("you enter the string instead of the number ");
//         }
//         else{
//             console.log("you successfully enter the age in the number ");
//             if(age>18){
//                 console.log(" you are eligible ");
//             }
//                 else{
//                     console.log("you are not eligible my friend ");
//                 }
//             }
//         }
//     }

    
// 😁🍻 think about the approach first 
// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// let table = +prompt("enter any number");
// for(let i =1 ; i<=10 ; i++){
//     console.log(`${table} * ${i} = ${table*i}`)
// }

// 😄


// 😁🍻
// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// user - password  print  apna password user correct access else deny doubt how to resolve if the user enters the correct password in the different case 

// let  set_password = "sidak kaur";
// let user_password = prompt("enter your password user g ");
// if(set_password===user_password)
// {
//     console.log("you can access the account");
// }
// else{
//     console.error(" you cannot access the account ");
// }
// 😁😁🍻
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”


// let set_password = "sidak kaur";
// let user_password = prompt("enter your password user g ");
// for (let i = 0; i <= 2; i++) {

//     if (set_password === user_password) {
//         console.log("you can access the account");
//         break;
//     }

//       else if ((i ===2 ) && (set_password !== user_password)) {
//         console.error("account locked");
//     }

//     else {
//         user_password = prompt("enter your password user g ");
//     }
// }

// 😁😁😁
// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let yes = 0;
// let stop_point = "stop";
// let words;

// while(words !== stop_point){
//   words = +prompt("Enter any word: ");

//   if(words === "yes"){
//     yes++;
//   }
// }
// console.log("Total yes count: ", yes);

// 😁
// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
// for(let i = 1;  i <= 50 ;i++){
//     if(i%7===0){
//         console.log(i);
//     }
// }
// 😁
// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum= 0;
//     for(let i = 1;i<=30;i++){
//         if(i%2!==0){
//            sum=sum+i;
//         }
//     }
//  console.log(sum);

// 😁😁🍻
// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// let num=1;
// while(num%2!==0){
//  num=+prompt("enter the number");
//  console.log(num);
// }
// console.log(` first even no enter by the user is ${num} `);


// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// 😁😁🍻
// let input=+prompt("starting point");
// let output=+prompt("ending point");
// if(input<output){
//  for (let i =input+1;i<output;i++ ){
//         console.log(i);
//  }
// }
// else{
//      for (let i =input-1;i>output;i-- ){
//         console.log(i);
//  }
// }

// 😁😁
// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
//  three odd numbers count 
// let count_odd= 0;
// for (let i = 1;i<20;i++){
//     if((i%2!==0) && (count_odd < 3)){
//         console.log(i);
//         count_odd++;
//     }
// }

// 😄
// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// 😁😁
// let count_positive = 0;
// let count_negative= 0;
//  for( let i = 0;i<5;i++){
// let user_input=Number(prompt('type any five numbers') );
//     if(user_input>0){
//         console.log(user_input);
//         count_positive++
//     }
//       else
//     {
//         console.log(user_input);
//       count_negative++;
//     }

//  }
//      console.log(` the no of positive numbers are ${count_positive}`);
//  console.log(` the no of negative  numbers are ${count_negative}`);


// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 1000;
for ( let i = 1 ; i <=3 ; i++){
  let  withdraw= +prompt("enter the amount you want to withdraw");
  console.log(` amount ${i} that the user wants to withdraw ${withdraw}`);
  if(withdraw<=balance){
    balance-= withdraw;
    console.log(` remaining balance  = ${balance}`);
  }
  else{
    console.log("insufficient amount");
  }
}

