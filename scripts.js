let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 1) {
        return computerChoice = 'ROCK'
    } else if (computerChoice === 2) {
        return computerChoice = 'PAPER'
    } else {
        return computerChoice = 'SCISSORS'
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice");
    return humanChoice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("Draw!")
    } else if ((humanChoice === 'ROCK' && computerChoice === 'PAPER') || (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') || (humanChoice === 'SCISSORS' && computerChoice === 'ROCK')) {
        computerScore++;
        console.log("You Lose! " + computerChoice + " beats " + humanChoice)
    } else {
        humanScore++;
        console.log("You Win! " + humanChoice + " beats " + computerChoice)
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore) {
        return "You Won! Final Score: " + humanScore + " - " + computerScore;
    } else if (humanScore < computerScore) {
        return "You Lost! Final Score: " + computerScore + " - " + humanScore;
    } else {
        return "It's a Draw!";
    }
}
console.log(playGame())
