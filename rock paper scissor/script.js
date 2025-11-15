let choice = document.querySelectorAll('.choices button.choice');
let rockBtn = document.querySelector('button[data-choice="rock"]');
let paperBtn = document.querySelector('button[data-choice="paper"]');
let scissorsBtn = document.querySelector('button[data-choice="scissors"]');
let playerPick = document.querySelector('#playerPick');
let computerPick = document.querySelector('#computerPick');
let message = document.querySelector('#message.message');
let historyList = document.querySelector('#historyList');
let startBtn = document.querySelector('#startBtn');
let resetBtn = document.querySelector('#resetBtn');
let playerScore = document.querySelector(' p#playerScore ');
let computerScore = document.querySelector('p#computerScore');
let You = document.querySelector('#playerPick.pick-icon');
let Comp = document.querySelector('#computerPick.pick-icon');
let p = 0;
let c = 0;
let computerChoice;
let playerChoice;
let round = 1;
let music = document.getElementById("bgMusic");
function startGameMusic() {
    music.play();
    music.loop = true;
}
  
    choice.forEach(btn => {
    window.addEventListener("click", () => {
        startGameMusic();
    }, { once: true });
});



let player = 0;
let computer = 0;
let gameStarted = false;

startBtn.addEventListener('click', function () {
    gameStarted = true;
    message.textContent = " Rock-paper-scissor time! 🔥";
    historyList.textContent = "";
    playerPick.innerHTML = " ";
    computerPick.innerHTML = " ";
    function enableChoices() {
        choice.forEach(btn => btn.disabled = false);
    }
    enableChoices();
})

choice.forEach(btn => {
    btn.addEventListener('click', function () {

        if (!gameStarted) {
            console.log("Game start nahi hoya veer 😆");
            return;
        }


        playerChoice = btn.dataset.choice;

        console.log("You selected:", playerChoice);

        // temporary disable buttons (1 sec)
        choice.forEach(b => b.disabled = true);
        setTimeout(() => {
            if (p < 5 && c < 5) {
                // only enable if game NOT ended
                choice.forEach(b => b.disabled = false);
            }
        }, 400);

        const options = ["rock", "paper", "scissors"];
        computerChoice = options[Math.floor(Math.random() * 3)];
        console.log(` Computer Selected : ${computerChoice}`);

        const iconMap = {
            rock: "https://img.icons8.com/emoji/96/rock-emoji.png",
            paper: "https://img.icons8.com/emoji/96/page-facing-up.png",
            scissors: "https://img.icons8.com/emoji/96/scissors-emoji.png"
        };


        You.innerHTML = `<img src="${iconMap[playerChoice]}" alt="${playerChoice}">`;
        Comp.innerHTML = `<img src="${iconMap[computerChoice]}" alt="${computerChoice}">`;
        // Create a function:

        function checkWinner(player, computer) {


            if (player === computer) {
                message.textContent = "It’s a tie 😐";
                message.style.color = " mediumvioletred";
                return "game is tie ";
            }
            else if (
                (player === "rock" && computer === "scissors") ||
                (player === "paper" && computer === "rock") ||
                (player === "scissors" && computer === "paper")
            ) {
                message.textContent = " You win! 🎉 ";
                message.style.color = "green";
                p++;
                playerScore.innerHTML = `${p}`;
                console.log(` no of times player wins ${p}`);
                return "player is winner";
            }
            else {
                message.textContent = " You lose! ❌";
                message.style.color = "red";
                c++;
                computerScore.innerHTML = `${c}`;
                console.log(` no of times computer wins ${c}`);
                return "Computer is winner ";
            }


        }

        let resulttext = (checkWinner(`${playerChoice}`, `${computerChoice}`));
        console.log(` ${resulttext}`);
    

        if (p === 5 || c === 5) {
            choice.forEach(btn => btn.disabled = true);
            historyList.style.display = "block";
            if (p === 5) {
                console.log(' player apna winner a g ')
                message.innerHTML = " CONGRATULATIONS YOU WON 🏆"
            }
            else {
                console.log(' computer apna winner a g ')
                 message.innerHTML = " COMPUTER WINS 😎 "
            }

        }

        historyList.innerHTML += `
        <li>Round ${round} → You: ${playerChoice} | CPU: ${computerChoice} → ${resulttext}</li>`
;
// historyList.scrollTop = historyList.scrollHeight;
        console.log(` round is  ${round}`)
        round++;
    });

});


resetBtn.addEventListener('click',function(){
    p = 0;
    console.log(p);
    playerScore.innerHTML = " 0 ";
    computerScore.innerHTML = " 0  ";
    c = 0;
    console.log(c);
    message.innerHTML = 'start playing  again ';
    choice.forEach(btn => btn.disabled = false);
    You.innerHTML = '?';
    Comp.innerHTML ='?';
    round = 1;
    historyList.innerHTML = " ";
  
})

document.getElementById("darkModeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    console.log('ijj');
});
