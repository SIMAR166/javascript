// 🟢 Beginner Level (Warm-up)
// 	1.	Write a function declaration named greetUser that takes one parameter name and prints
function greetUser(username) {
    console.log(`Hello , ${username}`)
}
greetUser("simar");

// 2.	Write a function expression to find the sum of two numbers and return it.

let sum = function (value1, value2) {
    return value1 + value2;
};
console.log(` sum of the two numbers is ${sum(5, 10)}`);

//  3.	Create an arrow function called square that returns the square of a number.

let square = (a) => { return (a * a) };
console.log(square(4));
// if the single line then no need to use the curly brackets like without the return statement a*a is also valid 

// 	4.	Write a function declaration welcome with no parameters that just prints
function welcome() {
    console.log("Welcome to JavaScript world!")
} welcome();

// 5.	Write a function expression findAverage that takes 3 numbers and returns their average.
let findAverage = function (a, b, c) {
    return ((a + b + c) / 3);
};
console.log(findAverage(70, 90, 70));

// 6.	Create an arrow function isEven that checks if a number is even (returns true or false).
{
    let isEven = (number) => {
        if (number % 2 === 0) return true;
        return false;
    };
    console.log(` number 13 is even : ${isEven(13)}`);
    console.log(` number 4 is even : ${isEven(4)}`);
}

//    🟡 Intermediate Level (Logic Practice)

// Now, use functions inside other logic (like if-else, loops, etc.) 👇
// 	7.	Write a function declaration findMax that takes two numbers and returns the larger one.
function findMax(no1, no2) {
    if (no1 > no2) return `the largest number between the ${no1} and ${no2} is : ${no1} `;
    else return `the largest number between the ${no1} and ${no2} is : ${no2} `;
}
console.log(`${findMax(4, 9)}`);
console.log(`${findMax(10, 9)}`);

// 8.	Write an arrow function getGrade that takes marks and returns:
// •	“A” if marks ≥ 90
// •	“B” if marks ≥ 75
// •	“C” if marks ≥ 50
// •	“Fail” otherwise
let getGrade = (marks) => {
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
    if (marks >= 50) return "C";
    return "Fail";
};
console.log(getGrade(90)); console.log(getGrade(50)); console.log(getGrade(10)); console.log(getGrade(75));

// 9.	Write a function expression printTable that prints the multiplication table of any number (1–10).
let printTable = function (number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
};
printTable(9);

// 10.	Create an arrow function reverseString that returns the reversed version of a string.
{
    let reverseString = function (username) {
        return username.split("").reverse().join("");
    };
    console.log(reverseString("functions"));
}

// 11.	Write a function declaration factorial that returns the factorial of a number.
function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));

// 12.	Write an arrow function countVowels that takes a string and returns how many vowels are in it.
let countVowels = (anything) => {
    let count = 0;
    for (let i = 0; i < anything.length; i++) {
        let char = anything[i].toLowerCase(); // handle uppercase too
        if ('aeiou'.includes(char)) {
            count++;
        }
    }
    return count;
};
console.log(countVowels('simar'));


// 13.  Write a function greet(name, age) that prints a message like —

function greet(name, age = 20) {
    console.log(`Hello ${name}, you are ${age} years old `)
}
greet('noor');
// What happens if you call greet() without passing any arguments? greet();
// it shows the values as the undefined  to overcome this i can use the concept if the default parameters

// 	14.	Default parameters
function login(username = "Guest") {
    console.log("Welcome Guest");
} login();


// 	15.	Multiple default values
function add(a = 5, b = 10) {
    let sum = a + b;
    console.log(`sum of the ${a} and ${b} is ${sum}`)
}
add();
add(2);
add(undefined, 2);
add(5, 5);

// 	15.	Rest parameters (sum)
// Write a function sumAll(...numbers) that prints the total of all numbers passed.
function sumall(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    console.log(`sum of  numbers is ${total}`)
}
sumall(5, 5, 10, 10, 20);

// 	16.	Rest parameter (average)
// Make a function average(...nums) that finds the average of all given numbers.
function average(...nums) {
    console.log(nums.length);
    let total = 0;
    let avg = 0;
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];
    }
    avg = total / nums.length;
    console.log(avg);
}
average(20, 40, 60, 20);

// 	17.	Combination of normal + rest
function showDetails(name, ...hobbies) {
    console.log(`${name} loves to ${hobbies} in a day`)
}
showDetails('simar', 'read, sleep and code');

// 	18.	Using arguments with different counts
function sumAll(...numbers) {
    console.log(numbers);
}
sumAll(2, 4);
sumAll(2, 4, 6, 8, 10);

// 	19.	Mixing default + rest
// Write a function order(item = "Coffee", ...extras) that prints something like:
function order(item = "coffee", ...extras) {
    console.log(`You ordered ${item} with ${extras} `);
}
order(undefined, 'sugar and  milk ');

// 	20.	Challenge
// Create a function calculate(type = "add", ...nums) that:

// 	•	Adds all numbers if type is "add"
// 	•	Multiplies all numbers if type is "multiply"
function calculate(type = "add", ...nums) {
    if (type === "add") {
        let total = 0;
        for (let i = 0; i < nums.length; i++) {
            total = total + nums[i];
        }
        console.log(`sum of  numbers is ${total}`)
    }
    else {
        let total = 1;
        for (let i = 0; i < nums.length; i++) {
            total = total * nums[i];
        }
        console.log(`multiplication of  numbers is ${total}`)

    }
}
calculate("multiply", 10, 20);
calculate(undefined, 10, 20);

// ❤️❤️❤️❤️❤️ first class functions
// chalo pdayi kre simar koi gll nai agr smjh nai aunda sara ikatha pr apa hauli hauli kr lain aa tu tension na lai 
// pass a function to a variable
let suraj = function (sun) {
    console.log(`chlo aj apa ${sun} bare pdayi kriye  thik aa g ok aa g shi aa g `);
}
suraj('suraj');

//  practice of function as a argument 
function function1() {
    console.log('hello i am function 1');
}
function function2() {
    console.log('hello i am function 2');
}

function run(chalo) {

    chalo();
    chalo();
    console.log(" now i come from function 1 and go to the function 2");
}
console.log(` how are you guys ${run(function1)}`);
console.log(` how are you mitro ${run(function2)}`);

// practice of the return function from the other function yippeeee maza aa ve gyeo sajjno sohinye je terr nll dga je kma va haye raab kre mai mar java hayeeeee 

function upr_wlla() {
    console.log(" hnji mai hi aa  upr wlla function ");
    return function thale_wlla() {
        console.log(" hnji mai hi aa thale wlla function ");
    }
}

function good_wlla() {
    console.log(" hnji mai hi aa  good upr  wlla function ");
    return function thale_wlla() {
        console.log(" hnji mai hi aa  good thale wlla function ");
    }
}
let storekro = upr_wlla();
storekro();
storekro = good_wlla();
storekro();

// const storekro = upr_wlla();
// storekro();
// storekro=good_wlla();
// storekro();

// here i also understand the concept of the const and let being used before the referenced variable 

// ❤️❤️ practice questions first class functions

// 🧠 Level 1 – Basics (Identify & Understand)
// 	1.	Write a function named sayHello that prints "Hello!".
// 	•	Store it inside a variable greet and call greet().
// 	2.	Create a function welcome() and assign it to another variable msg.
// 	•	Delete the original welcome variable and see if you can still call the function.
{
    let greet = function sayHello() { console.log("hello"); }
    greet();
}


// {
//     let msg = function welcome1() {
//         { console.log("welcome"); }
//     }
//     msg = null;
//     msg();
//     // will get type error here 
// }

// 	3.	Create two functions:
// 	•	morning() → logs "Good Morning"
// 	•	evening() → logs "Good Evening"
// Store one of them in a variable called currentTimeMessage and call it.
// 	4.	Write a function logFunction(fn) that takes a function as an argument and executes it.
// 	•	Try calling it as logFunction(morning).

function morning() {
    console.log('"Good Morning"');
}
{
    let currentTimeMessage = function evening() {
        console.log('"Good Evening"');
    }
    currentTimeMessage();
}

function logFunction(fn) {
    fn();
    fn();
    fn();
}
logFunction(morning);


// 💡 Level 2 – Functions as Arguments
// 	5.	Write a function runThreeTimes(fn) that executes any function three times.
// 	•	Pass a function that logs "Simar is learning JS!".


function learning() {
    console.log('Simar is learning JS!.');
}
function runThreeTimes(fn) {
    fn();
    fn();
    fn();
}
runThreeTimes(learning);

// 	6.	Create a function calculate(fn, a, b) where fn is a function that performs an operation (like add, subtract).
// 	•	Define separate functions add(x, y) and multiply(x, y) and pass them into calculate.
{
    function add(x,y){
        console.log(`${x + y}`);       
    }
 function multiply(x,y){
        console.log(`${x * y}`);       
    }


function calculate(fn,a,b){
    fn(a,b);
}
calculate(add,4,4);
calculate(multiply,4,4);
}

	// 7.	Write a function applyOperation(fn, num) that applies fn to num and returns the result.
	// •	Test with square and double functions.⏳
{
function applyOperation(fn) {
  return function(num) {
    return fn(num); // inner function applies fn to num
  };
}

function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

const doSquare = applyOperation(square);
const doDouble = applyOperation(double);

console.log(doSquare(4));  // → 16
console.log(doDouble(4));  // → 8
}

	// 8.	Write a function outer() that returns another function inner() which logs "Inner function called!".
	// •	Store the result in a variable and call it.

    function outer(){
        return function inner(){
            console.log("inner function called !");
        }
    }
    let store =outer();
    store();