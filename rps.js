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

function round(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        return "draw";
    }

    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return "computer";
        } else {
            return "player";
        } 
    }
    
    if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            return "computer";
        } else {
            return "player";
        }
    }
    
    if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            return "computer";
        } else {
            return "player";
        }
    }
}

function userInput(){
    
    const input = prompt("Rock, Paper, Scissors? (r/p/s/random): ")
    

    switch(input){
        
        case "r":
            return "rock";
            break;
        case "p":
            return "paper";
            break;
        case "s":
            return "scissors";
            break;
        default:
            return computerPlay();
    }
    
}

function playRound(){
    const playerSelection = userInput();
    const computerSelection = computerPlay();

    return round(playerSelection, computerSelection);
}

function game(){
    
    const rounds = [];
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++){
        rounds.push(playRound());
    }

    for (let i = 0; i < 5; i++){
        
        if (rounds[i] === "player"){
            playerWins++;
        } else {
            computerWins++;
        }
    }

    if (playerWins > computerWins){
        alert(`You won! ${playerWins} to ${computerWins}`);
    } else {
        alert(`You lost! ${computerWins} to ${playerWins}`);
    }    
}

game();