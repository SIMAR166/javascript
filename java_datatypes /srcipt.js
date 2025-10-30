// question first

const username="simar";
let age=20;
console.log(username);
console.log(age);

// question 2 

let x = 5;
//  will throw an error as the let does not support the redeaclaration
//  let x=15;
let y = 10;
 x = 78;
console.log(x);
console.log(y);

// question 3 because of the concept of the hoisting 
console.log(value );
var value=56;

// question 4 
const bag = {
    price:"3400",
    brand:"puma",
    warranty : " 1 year",
};
bag.price="800";
bag.color="pink";
delete bag.warranty;
console.log(bag);

// question 5 let respect the blocks so the value of the variable cannot be accessed after the block
{
    let studentno = 56;
    console.log(studentno);   
}

// question 6 
const collect=['item1', 'item2','item3','item4','item5'];
collect.push('item6');
console.log(collect);
collect.pop('item6');
console.log(collect);

// question 7

function isempty(value)
{
    if (value === " ") return console.log(` the value is ${value} space `);
     if (value === undefined) return  console.log(`the value is  ${value}`);
    if   (value  === null) return console.log(`the value is  ${value}`);
}
isempty(null);
isempty(undefined);
isempty(" ");

// question 8 simple calculator 
function calc(a , b,operator){
    switch(operator){
        case '+' : console.log(`the addition of the ${a} and ${b } is ${ a + b } `);
                break;
        case `-` : console.log(`the subtraction of the ${a} and ${b } is ${ a - b } `);
                break;
        case '*' : console.log(`the multiplication  of the ${a} and ${b } is ${ a * b } `);
                break;
        case `%` : console.log(`the modulas  of the ${a} and ${b } is ${ a % b } `);
                break;
         case `/` : console.log(`the division   of the ${a} and ${b } is ${ a / b } `);
                break;
    }
}
calc(10,2 , '+');
calc(10,2 ,'*');
calc(10,2 ,'/');
calc(10,2 ,'%');
calc(10,2 ,'-');

// question 9  score logic 

function student_marks (marks){
    if (marks>=80) return console.log(` ${marks} Excellent performance`);
    if ((marks>=70) && (marks<80)) return console.log(` ${marks} Good performance`);
    if  ((marks>=40) && (marks<70)) return console.log(` ${marks} Average performance`);
    if ((marks<40))  return console.log(` ${marks} Poor performance`);
}
student_marks(67);
student_marks(77);
student_marks(90);
student_marks(80);
student_marks(6);

// question 10
 console.log (prompt(`if the html is skeleton and css is the body then what is the javascript ? `))

// question 11
//  script : if it is used then the html stops loading once the script file is found it will then download the script file after then loads the html
// defer : when the script file is encounted then it starts downloading while the html loads both tasks are parallel and execution of the script start when the whole html is downloaded and parsed 
// asyn : then the script encounters then it loads the script while the html loads at the background when the script is ready to execute then it can pause the html
// and execute the script

// question 12

{
var a="simar";
a="updated";
let b="sheriyans";
b="updated";
const c="school";
// c="updated";
console.log(`hii my name is ${a} and i study at ${b} coding ${c}`);
}

// question 13
const company = "shero";
const account_no = 23768489649;
const pi =3.14;
console.log(pi);
console.log(account_no);
console.log(company);

// question 14
{
let name = 'simar';
console.log(`name`);
let age = 19;
console.info(`age`);
let city=`nawashahr`;
console.warn(`city`);
let nearcity=`nawashahr`;
console.error(`nearcity`);
} 

// question 15
const students = [
  { name: "Simar", age: 20 },
  { name: "Sidak", age: 1 },
  { name: "Noor", age: 21 }
];
console.table(students);

// question 16
{
 let username=prompt(`hello enter your name`);
 let show= (alert(` ${username} you are doing great work `));
console.log(`username`);
 console.log(typeof(`username`));
typeof(`show`);
console.log(`show`);
}

// question 17 understand the behavior of the prompt 
let your_age = Number(prompt("enter your age "));
console.log(your_age + 5);
console.log(typeof(your_age));

// question 18 
let msg=" i love sheriyans";
console.log(`${msg}`);
console.log(`${msg}.slice(2,6)`);
console.log(`${msg}.split(" ")`);
console.log(`${msg}.replace("love","study at ")`);
console.log(`${msg}.includes("sheriyans")`);



// question 19 
{
let myage=25;
let meranam = "simar kang";
let isstudent = true;
let skills = ["js","html"];
let user = {
    city:"bhopal",
    
};
let r=null;
let z= Symbol("id");
console.log(typeof(r));
console.log(typeof(age));
console.log(typeof(isstudent));
console.log(typeof(skills));
// console.log(typeof(r));
console.log(typeof(z));
}

// question 20 
{
let obj1 = {urname : "rohini"};
let obj2 = obj1;
obj2.urname = "sheriyans";
console.log(obj1.urname);
}

