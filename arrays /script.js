// arrays used to hold more than one value in the variable 
// create a array 
let arr = new Array();
let arr1 = [23,45,'sushi','shami','sukhniwas','sukhjap'];
// access from a array
console.log(arr1[4]);
// modify the array 
arr1[4]='sukhjeo';
console.log(arr1[4]);

// array methods revise 
// pop and shift        push and unshift 

// pop removes the last element in the array  
let arr2 = [34,65,23,78,90];
arr2.pop();
console.log(arr2);
// push  adds the new element at the last index 
 arr2.push(100);
console.log(arr2);
// shift  removes the first element in the array 
arr2.shift();
console.log(arr2);
// unshift adds the new element in the very beginning of the array 
arr2.unshift(600);
console.log(arr2);

let ar = [2, 4, 6, 8, 10];
let doubled = ar.map((n) => n * 2);
console.log(doubled);
Output: [4, 8, 12, 16, 20]

let arr1 = [11,64,10,2,56];
let newarr = arr1.map(function(val)
{
    if(val >10) return val ;

});
console.log(newarr);
// ✅ splice and slice 

let sundar = ['sushila' , 'santushti' , 'upma' , 23,45,65];
console.log(sundar);
//  slice does not use the original array but it use the copy beta g last parameter is index-1 tk chlna a 
console.log(sundar.slice(0,5));
// splice modify the original array second argument is the delete count 
sundar.splice(1,4);
console.log(sundar);
// reverse the array 
sundar.reverse();
console.log(sundar);

//  ✅ sort 
let arr78 = [78,55,34,890,623,12];
 let sorted =  arr78.sort((a , b ) => a-b);
//  sorted holds the array values bcz of teh concept of the reference 
 console.log(sorted);
// sorted;
let arr88 = [45,76,23,11,34];
 let update = arr88.sort((a,b) => b-a );
 console.log(update);

// ✅ for each  it does not return anything ok girl got my point 
 let square = [2,3,4,5,6];
 square.forEach((n) => {
    console.log(n*n);
 })

// ✅ map returns the new modified array but does not do any change in the existing array 
let num = [2,3,4,5,6,7,8];
console.log(num);
let ans = num.map((n) => { 
    return n * 2 
}  );
console.log(ans);


// ✅ filter mainly returns the boolean value 
let numb = [2, 8, 4, 10, 3];
console.log(numb);
let filtered = numb.filter((n) => {
    if (n > 5) {
        return true;   // keep it in the new array
    }
     else {
        return false;
    }
});
console.log(filtered);

// ✅  reduce returns the value and it converts the array in the single digits give the acculumator value else it will take the value same as the first element of the array 

let kushb = [3,4,5,2];
let hor = kushb.reduce(( acc ,n) => acc * n ,1);
console.log(hor);

// ✅ find it only returns the first element that satisfy the condition only first keep in my beta g 

let kro = kushb.find((n) => n >2);
console.log(kro);

// ✅ some check that in the whole array is atleast one array satisfy the condition or not  ans in true or false only 
 kro = kushb.some((n) => n <2 );
console.log(kro);


// ✅ every checks that is all the elements of the array satisfy the specific condition ans in true and false 

 kro = kushb.some((n) => n >0 );
console.log(kro);


// PRACTICE QUESTIONS START KRDO 


// 1. Print all elements of this array:
// let arr = [10, 20, 30, 40, 50];
// // 2. Print length of array and also print each element with its index.
// console.log(` length of the array is ${arr.length}`);
// arr.forEach((value, index) => console.log(index, value));

// // 3. Sum of all numbers in:
// let nums = [1, 4, 6, 8, 2];
// let ans = nums.reduce((acc, value) => {
//     return acc += value;
// }, 0);
// console.log(ans);

// let sum = 0;
// nums.forEach((value) => sum += value);
// console.log(sum);
// // 4. Count how many numbers are greater than 5:

// let arr1 = [3, 9, 2, 12, 7];
// let count = 0;
// let filtered = arr1.filter((value) => {
//     if (value > 5) {
//         count++;
//         return count;
//     }
// });
// console.log(filtered);

//  5. Print only even numbers from:
// let arr2 = [11, 22, 33, 44, 55, 66];
// let counter = 0;
// let even = arr2.filter((values) => {
//     if (values % 2 == 0) {
//         counter++;
//         return counter;
//     }
// });
// console.log(even);

// 6. Print the array in reverse (do not use .reverse()):
// let arr3 = [1, 2, 3, 4, 5];
// let reversed = arr3.sort((a , b) =>  b - a );
// console.log(reversed);

// 7. Find the largest number in:
let arr4 = [5, 9, 12, 3, 7];
 let sortkro = arr4.sort((a,b) => (a-b ));
 console.log(sortkro);
  console.log(` largest number in the array is =>  ${sortkro.pop()}`);

// 8. Find the smallest number in:
let arr5 = [45, 12, 78, 3, 19];
 let sortkroo = arr5.sort((a,b) => (a-b ));
 console.log(sortkroo);
  console.log(` smallest number in the array is =>  ${sortkroo.shift()}`);

  // 9. Count how many are positive and negative:

let arr6 = [-3, 4, -7, 9, 0, 2];
let pos = 0;
let neg = 0;
arr6.forEach((value) => 
{
    if(value>=0)
    pos++;
    else{
        neg++;
    }
});
console.log(pos);
console.log(neg);


// 10. Ask user for a number → check if it exists in:
let arr72 = [3, 6, 9, 12, 15];
let enter = +prompt("enter krdo koi v number g ");
    let willsee =  arr72.find((value, enter  ) =>{
        if(value===enter){
            return true;
        }
        else{
            return false;
        }
        });
    console.log(willsee);
   
// here is the code to check that whether the number exist in the array or not 
let arr7 = [3, 6, 9, 12, 15];
let enter2 = +prompt("enter any number");
 if(arr7.includes(enter)){
    console.log("number exist in the array ");}
else {
    console.log("number does not exist in the array");
}


// 10.	Take 5 numbers from user, store in array → print sum

let start = [];  // make empty array

for (let i = 0; i < 5; i++){
  let num = +prompt("Enter number " + (i+1));
  start.push(num);  // store in array
}

console.log("Array = ", start);

let sum = 0;
for (let i = 0; i < start.length; i++){
  sum += start[i];
}

console.log("Sum = " + sum);

	// 13.	Create new array with only positive numbers → 

let arr8 = [-2, 4, -7, 9, 12, -1]; 
let sis = arr8.filter((value) =>
{
   if(value>0){
      return value ;
   }
}
);
console.log(sis);

	// 14.	Count how many times "yes" appears → 

let words = ["yes", "no", "yes", "stop", "yes"];
let count = 0 ;
let yes = words.filter((value) =>{
  if(value==="yes"){
    count++;
  }
  return count;
});
console.log(count);

// 15.	Create new array with each element doubled → 
let arr10 = [2, 5, 8, 3];
let system = arr10.map((value)=> {
  return value * value ;
});
console.log(system);

	// 16.	Copy only values greater than 10 into new array →

   let arr11 = [4, 15, 22, 8, 30, 9];
   let nva = [];
   let ss = arr11.filter((value) => {
    if(value > 10)
    {
         return value ;  
      };
    
   });
   console.log(ss);
   console.log(arr11);


  // 18.	Merge two arrays without using built-in functions → 
  let a = [1,250,3]; let b = [4,5,6];
 c = a.concat(b);
 console.log(c);


	// 19.	Check if "apple" is present (use .includes())
     let rs=   c.includes(4);
     console.log(rs);
	// 20.	Find first number greater than 50 (use .find())
    let d =  c.find((value) =>
      {
        return value > 50 ; 
      });
      console.log(d);

// 23.	Find sum using .reduce()	
  let kam = c.reduce((accu,value) =>{
      return accu+=value;
  },0);
  console.log(kam);





