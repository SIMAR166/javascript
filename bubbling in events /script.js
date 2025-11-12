const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandparent.addEventListener("click", () => {
  console.log("Grandparent clicked");
  grandparent.style.backgroundColor = "red";
});

parent.addEventListener("click", () => {
  console.log("Parent clicked");
  parent.style.backgroundColor = "grey";
});

child.addEventListener("click", (e) => {
  console.log("Child clicked");
//   e.stopPropagation();
  child.style.backgroundColor = "pink";
  
  // Temporary: Let bubbling happen first. 
  // We will stop it later in the challenge.
});


	// 1.	Make each box change background color when clicked.
	// 2.	But child should only change its own color (not parent’s or grandparent’s).