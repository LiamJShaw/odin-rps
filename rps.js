function computerPlay(){
    let rng = Math.floor(Math.random() * 3);

    if (rng === 0) {
        return "rock";
    }
    if (rng === 1) {
        return "paper";
    }
    if (rng === 2) {
        return "scissors";
    }
}

function playRound(playerSelection){

    computerBox.style.backgroundImage = ""
    playerBox.style.backgroundImage = "";

    let computerSelection = computerPlay();

    playerBox.style.backgroundImage = `url('${playerSelection}.png')`;
    playerBox.style.backgroundSize = "50%";
    playerBox.style.backgroundRepeat = "no-repeat"; 
    playerBox.style.backgroundPosition = "bottom";

    computerBox.style.backgroundImage = `url('${computerSelection}.png')`;
    computerBox.style.backgroundSize = "50%";
    computerBox.style.backgroundRepeat = "no-repeat"; 
    computerBox.style.backgroundPosition = "bottom";
    
    
    if (playerSelection === computerSelection){
        resultDisplay.textContent = "Draw!";
        return;
    }

    if (playerSelection === "rock"){


        if (computerSelection === "paper"){
            computerWin();
        } else {
            playerWin();
        } 
    }
    
    if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            computerWin();
        } else {
            playerWin();
        }
    }
    
    if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            computerWin();
        } else {
            playerWin();
        }
    }

    if (playerWins === 5){
        resultDisplay.textContent = "Player wins!";
        resetButton.style.display = "block";
    }
    
    if (computerWins === 5){
        resultDisplay.textContent = "Computer wins!";
        resetButton.style.display = "block";
    }
}

function computerWin(){
    computerWins++;
    resultDisplay.textContent = "Computer win!";
    computerWinsDisplay.textContent = computerWins;
}

function playerWin(){
    playerWins++;
    resultDisplay.textContent = "Player win!"
    playerWinsDisplay.textContent = playerWins;
}


let playerWins = 0;
let computerWins = 0;

const resultDisplay = document.querySelector("#result");

const playerBox = document.querySelector("#player");
const computerBox = document.querySelector("#computer");

const playerWinsDisplay = document.querySelector("#playerWins");
const computerWinsDisplay = document.querySelector("#computerWins");

const resetButton = document.querySelector("#reset");
resetButton.style.display = "none";

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playRound("rock");
});

paper.addEventListener('click', () => {
    playRound("paper");
  });

scissors.addEventListener('click', () => {
    playRound("scissors");
  });

reset.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;

    resultDisplay.textContent = "";

    playerWinsDisplay.textContent = "0";
    computerWinsDisplay.textContent = "0";

    resetButton.style.display = "none";

    computerBox.style.backgroundImage = ""
    playerBox.style.backgroundImage = "";
    playerBox.style.borderStyle = "solid";
    computerBox.style.borderStyle = "solid";
});