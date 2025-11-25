
// 1) All keys container
let white = document.querySelector('.white-keys');

let black = document.querySelector('.black-keys');



// 2) Mapping for each key according to data-index
const sounds = {
    1: "./music/24.mp3",
    2: "./music/29.mp3",
    3: "./music/69.mp3",
    4: "./music/41.mp3",
    5: "./music/48.mp3",
    6: "./music/53.mp3",
    7: "./music/60.mp3",
    8: "./music/64.mp3",
    9: "./music/65.mp3",
    10: "./music/69.mp3",
    11: "./music/72.mp3",
    12: "./music/77.mp3",
    13: "./music/79.mp3",
    14: "./music/84.mp3",
    15: "./music/41.mp3",
    16: "./music/24.mp3",
    17: "./music/48.mp3",
    18: "./music/53.mp3",
    19: "./music/36.mp3",
    20: "./music/79.mp3",
    21: "./music/77.mp3",
    22: "./music/69.mp3",
    23: "./music/64.mp3",
    24: "./music/65.mp3",
    25: "./music/69.mp3",

     "key1": "./music/48.mp3",
    "key2": "./music/53.mp3",
    "two":"./music/24.mp3",
    "three": "./music/29.mp3",
    "five": "./music/36.mp3",
    "six": "./music/41.mp3",
    "seven": "./music/48.mp3",
    "nine": "./music/53.mp3",
    "zero": "./music/60.mp3",
    "S": "./music/64.mp3",
    "F": "./music/65.mp3",
    "D": "./music/69.mp3",
    "H": "./music/72.mp3",
    "J": "./music/77.mp3",
    "L": "./music/79.mp3",
    ".": "./music/84.mp3",
    ",": "./music/41.mp3",
    "/": "./music/24.mp3",
   
};

function playSound(dets) {

    let key = dets.target.closest(".key");   // always get the actual key div
    if (!key) return;

    let index = key.dataset.index;
    let label = key.dataset.label;

    if (index) {
        new Audio(sounds[index]).play();
    }

    if (label) {
        new Audio(sounds[label]).play();
    }
}


const keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener("click", () => {

        // Remove active class from ALL keys
        keys.forEach(k => k.classList.remove("active"));

        // Add active class only to the clicked key
        key.classList.add("active");
    });
});



// --- KEYBOARD SUPPORT (FIXED SOUND + HIGHLIGHTING) ---
document.addEventListener("keydown", (e) => {
    const keyPressed = e.key.toUpperCase();   // q → Q

    // Find the piano key whose inner text matches the keyboard key
    const pianoKey = Array.from(document.querySelectorAll(".key"))
        .find(key => key.textContent.trim() === keyPressed);

    if (!pianoKey) return;

    // Highlight logic (same as click)
    document.querySelectorAll(".key").forEach(k => k.classList.remove("active"));
    pianoKey.classList.add("active");

    // SOUND LOGIC USING YOUR SOUND MAPPING
    let index = pianoKey.dataset.index;
    let label = pianoKey.dataset.label;

    if (index && sounds[index]) {
        new Audio(sounds[index]).play();
    }

    if (label && sounds[label]) {
        new Audio(sounds[label]).play();
    }
});

// 4) Events
white.addEventListener("click", playSound);
black.addEventListener("click", playSound);


