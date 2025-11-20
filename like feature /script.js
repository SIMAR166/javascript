
const img = document.querySelector(".post-img");
const heart = document.querySelector(".heart");

let timeout;

img.addEventListener("dblclick", () => {
    
    // show heart
    heart.style.opacity = 1;
    heart.style.transform = "translate(-50%, -50%) scale(1.3)";

    // bounce back
    setTimeout(() => {
        heart.style.transform = "translate(-50%, -50%) scale(1)";
    }, 100);

    // fade out
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        heart.style.opacity = 0;
        heart.style.transform = "translate(-50%, -50%) scale(0)";
    }, 800);
});