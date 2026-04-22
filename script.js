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

function getHumanChoice(buttonID) {
    return buttonID;
}

function playRound(humanChoice, computerChoice) {
    const scoreBoard = document.querySelector("#scoreBoard");
    
    document.querySelectorAll(".score").forEach((element) => element.remove());
    document.querySelectorAll(".message").forEach((element) => element.remove());

    let hScore = document.createElement("div");
    hScore.textContent = "Human score: " + humanScore;
    hScore.classList.add("score");
    scoreBoard.appendChild(hScore);

    let cScore = document.createElement("div");
    cScore.textContent = "Computer score: " + computerScore;
    cScore.classList.add("score");
    scoreBoard.appendChild(cScore);

    if (humanScore === 5) {
        let message = document.createElement("h1");
        message.textContent = "Human wins!";
        message.classList.add("message");
        scoreBoard.append(message);
        return;
    }
    else if (computerScore === 5) {
        let message = document.createElement("h1");
        message.textContent = "Computer wins!";
        message.classList.add("message");
        scoreBoard.append(message);
        return;
    }

    if (humanChoice == computerChoice.toLowerCase()) {
        let message = document.createElement("div");
        message.textContent = "Tie!";
        message.classList.add("message");
        scoreBoard.append(message);
        console.log(`Tie!`);
    }
    else {
        if (humanChoice == "rock" && computerChoice == "Paper") {
            let message = document.createElement("div");
            message.textContent = `You Lose! ${humanChoice} does not beat ${computerChoice}.`;
            message.classList.add("message");
            scoreBoard.append(message);
            computerScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "Scissors") {
            let message = document.createElement("div");
            message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            message.classList.add("message");
            scoreBoard.append(message);
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "Rock") {
            let message = document.createElement("div");
            message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            message.classList.add("message");
            scoreBoard.append(message);
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "Scissors") {
            let message = document.createElement("div");
            message.textContent = `You Lose! ${humanChoice} does not beat ${computerChoice}.`;
            message.classList.add("message");
            scoreBoard.append(message);
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "Rock") {
            let message = document.createElement("div");
            message.textContent = `You Lose! ${humanChoice} does not beat ${computerChoice}.`;
            message.classList.add("message");
            scoreBoard.append(message);
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "Paper") {
            let message = document.createElement("div");
            message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            message.classList.add("message");
            scoreBoard.append(message);
            humanScore++;
        }
    }
}

function playGame() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => playRound(getHumanChoice(button.id), getComputerChoice()));
    });
}

playGame();
