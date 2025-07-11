function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * 3) + 1;
    let choice;
    switch (choiceIndex) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
        default:
            choice = "what??"
    }
    return choice;
}

function getHumanChoice() {
    return prompt("Enter Rock, Paper, or scissors!");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("Welp... Looks like you both tied.");
                break;
            case "paper":
                console.log("The computer won this round!");
                computerScore++;
                break;
            case "scissors":
                console.log("You won this round!");
                humanScore++;
                break;
        }   
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You won this round!");
                humanScore++;
                break;
            case "paper":
                console.log("Welp... Looks like you both tied.");
                break;
            case "scissors":
                console.log("The computer won this round!");
                computerScore++;
                break;
        }
    } else {
        switch (computerChoice) {
            case "rock":
                console.log("The computer won this round!");
                computerScore++;
                break;
            case "paper":
                console.log("You won this round!");
                humanScore++;
                break;
            case "scissors":
                console.log("Welp... Looks like you both tied.");
                break;
        }
    }
}


let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("User choose: " +humanSelection);
console.log("PC choose: " + computerSelection)

playRound(humanSelection, computerSelection);
console.log("User's points: " + humanScore);
console.log("PC's points: " + computerScore);