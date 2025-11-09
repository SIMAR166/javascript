// 1.	Create an object car with keys: brand, model, year. Print each value using dot notation.
    let car = {
        brand : 'ispark',
        model :'ifehso',
        year : 2024,
    };
      for (let key  in car) {
        console.log(key,car[key]);
      }

// 	2.	Create an object person and access values using bracket notation.

let person = {
    person_name : "preeti",
    age : 34,
    school : "grips",
    hobby : "cooking"
};

let hobbies = "hobby";

// console.log(person);
console.log(person["person_name"]);
console.log(person[hobbies]);
console.log(person.age);
// 	3.	Create an object with nested object:

let profile = { name: "Simar",
     address: { city: "Amritsar", 
        country: "India" }
     };

// Print the city.
console.log(profile.address.city);

// 	4.	Given:

let student = {
    fullname : "simarpreet",
    urage : "20",
};

// Add keys dynamically using bracket notation:

// "name" → "Simar"
// "age" → 20

// Print the final object.

let nam = "fullname";
let umar = "urage";

console.log(student[nam]);
console.log(student[umar]);

// 	5.	Destructure:

let laptop = { brand: "HP", ram: "8GB", price: 45000 };

// Extract brand & price.
    let {brand, price}= laptop;
    console.log(brand);
    console.log(price);

// 	6.	Loop through:

let movie = { title: "Jawan", actor: "SRK", year: 2023 };

for(let keys in movie ){
    console.log(keys,movie[keys]);
}

console.log(Object.entries(movie));
console.log(Object.keys(movie));
console.log(Object.values(movie));


// 	9.	Show reference copy behavior:

let a = { x: 1 };
let b = a;
b.x = 999;
console.log(b);
console.log(a);
// why? ans because the reference is being passed not the copy of x to the b  ans both share the same memory space 

// 	10.	Make a shallow copy using:

	// •	Spread ...
	// •	Object.assign()
let a1 = { x: 1 };
let b1 = {...a1};
b1.x = 999;
console.log(b1);
console.log(a1);
// Change a property in the copy and show original remains unchanged.
// 	11.	Given:

let user = {
  name: "Simar",
  address: { city: "Amritsar", pincode: 143001 }
};

// Use optional chaining to safely access:
console.log( user.address?.street);

// 12.	Create an object where key name comes from a variable:

let key = "email";

// The object should become:

let kam = {
    email : "kangsimar@gmail.com",
    book : "atomic habits",
};

console.log(kam[key]);



// LEVEL 5 – Small Real-Life Mini Project
// 	13.	Student Manager
// Create an array of students (each student is an object):

let students = [
  { name: "Simar", marks: 92 },
  { name: "Mannat", marks: 85 },
  { name: "Arjit", marks: 76 }
];
for (let key in students){
  console.log(students[key])
}

// 	•	Loop through and print:
// "Simar scored 92"
// 	•	Find the student with marks > 90
// 	•	Add a new student to the list
// 	•	Update Simar’s marks to 95 without changing the original object (use copy)



 let anchor = document.querySelector('a');
 console.dir(anchor);

let image = document.querySelector('img');
console.log(image.getAttribute('src'));
console.log(image.removeAttribute('src'));
anchor.setAttribute ("href", "https://www.youtube.com/watch?v=1aR7tcmWo_w");