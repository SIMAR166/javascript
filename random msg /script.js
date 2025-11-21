const tips = [
    "Break complex functions into smaller, reusable modules.",
    "Use meaningful variable and function names for better readability.",
    "Commit your code frequently with clear, descriptive messages.",
    "Run linters to catch errors before testing your code.",
    "Use console.log strategically to debug small issues quickly.",
    "Keep your components small and focused on a single responsibility.",
    "Refactor duplicated code to make maintenance easier.",
    "Write comments only when the logic isn’t immediately clear.",
    "Use version control branches to experiment safely.",
    "Always test edge cases before final deployment."
];

let button = document.querySelector('button');


    
button.addEventListener('click', () => {

    let check = Math.floor(Math.random() * tips.length)

    let box = document.querySelector(".tip-box");
    box.innerHTML = tips[check];

    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    box.style.color = `rgb(${c1} ,${c2} ,${c3})`;
    box.style.backgroundColor = `rgb(${c3} ,${c1} ,${c2})`;
    box.style.fontWeight = "900";
    box.style.fontSize = "2rem";
    box.style.textShadow = "0 0 3px #000, 0 0 6px #000, 0 0 9px #000";

}) 







