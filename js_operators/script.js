
// basic operators 
// 1
{
    let a = 10;
    let b = 3;
    console.log(`${a + b}`);
    console.log(`${a - b}`);
    console.log(`${a * b}`);
    console.log(Math.round(`${a / b}`));
    console.log(`${a % b}`);
}

// 2 
{
    let x = 5;
    console.log(`intial value of the x is ${x}`);
    console.log(`addition is ${x += 3}`);
    console.log(`substraction is ${x -= 3}`);
    console.log(`multiplication is ${x *= 3}`);
    console.log(`division  is ${x /= 3}`);
}

// 3 
{
    let count = 5;
    console.log(`value of the count  before the increment is ${count}`);
    count++;
    console.log(`value of the count after  the increment is ${count}`);
    count--;
    console.log(`value of the count  after the decrement is ${count}`);
}
// 4 
console.log(5 == "5");
console.log(5 === "5");

// 5 
test();
function test() {
    console.log("hello kida g ");
}
// 6 
// hello();
//  var hello = function(){
//     console.log(" know i am doing work with the expression functions")
//  }
//  explanation of the error is that the expression function does not support the hoisting concept but the function declaration defiantely supports the hoisting 

// 7 
// let age=0;
// {
//  let age =(prompt("enter your age here "));
// if (age>18)
//     console.log( "adult");
// else
//     console.log( "minor");

//  }
//8

// {
//      let city  =(prompt("enter your city name  here "));
//     if(city==="bhopal"){
//         console.log("MP");}
//     else if (city==="delhi")
//     {
//         console.log("capital");
//     } 
//     else{
//         console.log("unknown city is entered by the user ")
//     }
// }

// 9
{
    let score = 40;
    (score > 35) ? console.log("pass a bacha") : console.log("fail a bacha ");
}

// 10
let temperature = 40;
(temperature > 30) ? console.log(" too hot outside") : console.log("weather is ok ok")

// 11
{
    let day_no = Number((prompt("enter  ")));
    switch (day_no) {
        case 1: console.log("1st day of the week i.e monday");
            break;
        case 2: console.log("2nd day of the week i.e tuesday");
            break;
        case 3: console.log("3rd day of the week i.e wednesday");
            break;
        case 4: console.log("4th day of the week i.e thursday");
            break;
        case 5: console.log("5th day of the week i.e friday");
            break;
        case 6: console.log("6th day of the week i.e saturday");
            break;
        case 7: console.log("7th day of the week i.e sunday");
            break;
        default: console.log(" invalid day is entered by the user");
    }
}

// 12
{
    let ur_age = 34;
    let country = "India"

    if ((ur_age > 18) && (country === "India")) {
        console.log("You are eligible  for vote");
    }
    else {
        console.log("you are not eligible for the voting")
    }
}