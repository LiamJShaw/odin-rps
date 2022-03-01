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

    let computerSelection = computerPlay();
    
    if (playerSelection === computerSelection){
        resultDisplay.textContent = "Computer win!";
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
        resultDisplay.textContent = "";
        winnerDisplay.textContent = "Player wins!";
    }
    
    if (computerWins === 5){
        resultDisplay.textContent = "";
        winnerDisplay.textContent = "Computer wins!";
    }

    if (playerWins === 5 || computerWins === 5){
        resetButton.style.display = "block";
    }

}

function computerWin(){
    computerWins++;
    resultDisplay.textContent = "Computer win!";
    computerWinsDisplay.textContent = "Computer: " + computerWins;
}

function playerWin(){
    playerWins++;
    resultDisplay.textContent = "Player win!"
    playerWinsDisplay.textContent = "Player: " + playerWins;
}


let playerWins = 0;
let computerWins = 0;

const resultDisplay = document.querySelector("#result");
const winnerDisplay = document.querySelector("#winner");

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
    winnerDisplay.textContent = "";

    playerWinsDisplay.textContent = "Player: 0";
    computerWinsDisplay.textContent = "Computer: 0";

    resetButton.style.display = "none";
});