let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randNum = Math.random() * 3;

    if (randNum < 1 && randNum >= 0) {
        return "Rock";
    }
    else if (randNum < 2 && randNum >= 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter 'Rock', 'Paper' or 'Scissors': ");
    return humanChoice.toLowerCase();
}
