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

console.log(getComputerChoice());