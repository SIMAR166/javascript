// Dom -> document object model 
//  body - dom ✅

//  dom manupulation ✅
//  text bdal dena ✅
//  attribute nu change krna ✅
// html nu change krna ✅
//  1 html toh element nu fadna  ✅
//  css nu v badal skdi aa ✅
//  event listeners
// dynamic dom manipulation ✅


// html nodes 

//  1 html toh element nu fadna 
//  getelementsbyid
//  getelementsdbyclass
//  queryselector
//  queryselectorall



// chlo attribute nu change kriye jii 

//  remove attribute 
// setattribute()
// getattribute()
// hasattribute() eh  v hunda aa kush kush tn 


  
// dynamic dom manipulation 
// createelement
// appendchild
// prependchild
// remove 


  // chlo hun js di help nll apa agge kam kriye k ap css bhen ji nu kida bdal skde aa oh hai beta g  chlo shuru kre
  // css
  // style 
  // class classlist.add() classlist.remove() classlist.toggle()


 
// PRACTICE QUESTIONS 
	// 1.	Select an element by id, another by class, and another by tag name. Log each one.
 let h1 =document.getElementById("first");
 console.dir(h1);
 let hh1 = document.getElementsByClassName("classfirst");
 console.dir(hh1);
 let element = document.querySelectorAll("h1");
 console.dir(element);

	// 2.	Write code to select all <li> elements inside a <ul> and change the text of the 3rd <li>.
 let li = document.querySelectorAll('li');
  // li.forEach ((item , index) => {
  //   item.textContent= " mai keha tuhada v dil krda huna ";
  //   if(index===2){
  //     item.textContent = " change v ho ja bhra g ";
  //   }
  // });

  li[2].textContent = " happy happy happy ";

	// 3.	Given nested elements, print the first child and last child of a given container.
   let kush = document.querySelector('ul li:nth-child(1)');
  kush.style.color = " pink";
  let apna = document.querySelector('ul li:last-child');
  apna.style.color = " hotpink ";
  // 	17.	Remove a specific list item from a <ul>.
  apna = document.querySelector('ul li:nth-child(2)');
  apna.remove();

	// 4.	Print parent element of a heading.

  let heading = document.querySelector("h4");
  console.log( heading.parentElement);
	// 5.	Check whether a selected element has any child nodes or not.
console.log(heading.hasChildNodes());

	// 6.	Change text of a <p> using innerText.
    let p = document.querySelector("p");
    
    p.innerText = " sukhbir singh badal ";
    console.dir(p);

	// 7.	Change text of a <p> using textContent — and explain the difference.

   p.textContent = "harsimrat kaur badal ";
  //  according to my understanding the textcontent is mostly used bcz it is fast and does not respect the css styles 

	// 8.	Insert bold HTML inside a <div> — but use innerHTML.
   let div = document.querySelector("div");
   div.innerHTML = " hii hi hi hi <b> kida aa </b>";

	// 9.	Replace the entire content of a section using innerHTML.

let section = document.querySelector("section");
section.innerHTML = " <b> sab kush </b> bdal dena aa apa dekhi chlo <i> dekhi chlo bs </i>";
console.dir(section);

// 🔗 Attribute Manipulation
// 	10.	Get the src of an image and print it.
    let krv = document.querySelector('div.image img');
    console.log(krv.getAttribute('src'));

    // 12.	Add a title attribute to an image tag.
  krv.setAttribute('title',"kush v rakhdo");

// 13.	Remove the alt attribute from an image.
krv.removeAttribute('alt');

	// 11.	Change the href of an anchor tag to 
let a = document.querySelector("div.image a ");
a.setAttribute("href","https://google.com")

// 🧱 Dynamic DOM Modification
// 	14.	Create a new <h3> element and add text to it.s
   
// 	15.	Append that new <h3> to the end of the body.

// 	16.	Prepend a <p> to the body.
  let nvap = document.createElement('p');
  nvap.textContent = " nva para bna k body de upr ja k lga dita aa ";
  document.querySelector('body').prepend(nvap);

// // 18. Clone an element and append it somewhere else
let h3 = document.createElement('h3');
h3.textContent = "nve element ch kush likh dita";
document.querySelector('div.image').append(h3);

// Clone the h3 element
let h3Clone = h3.cloneNode(true);
document.body.appendChild(h3Clone); // append clone

// 19. Insert an element before another element
let h2 = document.createElement('h2');
h2.textContent = "I am inserted before h3Clone";

// Insert h2 before h3Clone
// 	19.	Insert an element before another element.
document.body.insertBefore(h2, h3Clone);

// 🎨 Styling & Class Manipulation
	// 20.	Change the background color of a <div> using .style.
  let pakad = document.querySelector('div.newpara p ');
pakad.style.color = "orange";

	// 21.	Add a class "highlight" to a <p>.
    pakad.classList.add('nvi');
	// 22.	Remove the "highlight" class.
  pakad.classList.remove('nvi');
	// 23.	Toggle a "dark-mode" class on the body.
    let body= document.querySelector('body');
  body.classList.add('mode');
  body.classList.toggle('mode');
	// 24.	Check if an element contains a class "active" and print true/false.

if (body.classList.contains("active")) {
    console.log("Body is active!");
} else {
    console.log("Body is not active!");
}