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

function playRound(humanChoice, computerChoice) {

    if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        console.log(`Tie!`);
    }
    else {
        if (humanChoice.toLowerCase() == "rock" && computerChoice == "Paper") {
            console.log(`You Lose! ${humanChoice} does not beat ${computerChoice}.`);
            computerScore++;
        }
        else if (humanChoice.toLowerCase() == "rock" && computerChoice == "Scissors") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
        else if (humanChoice.toLowerCase() == "paper" && computerChoice == "Rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if (humanChoice.toLowerCase() == "paper" && computerChoice == "Scissors") {
            console.log(`You Lose! ${humanChoice} does not beat ${computerChoice}.`);
            computerScore++;
        }
        else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "Rock") {
            console.log(`You Lose! ${humanChoice} does not beat ${computerChoice}.`);
            computerScore++;
        }
        else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "Paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("You are the winner!");
    }
    else {
        console.log("You are the loser!");
    }
}

playGame();
