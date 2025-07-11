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
    return prompt("Enter Rock, Paper, or scissors!").toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

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


function playGame() {
    console.log("Welcome to RPS!")

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${(i + 1)}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Current Score: User ${humanScore} - ${computerScore} Computer`)
    }

    if (humanScore > computerScore) {
        alert("Congratulations, Player!");
    } else if (computerScore < humanScore) {
        alert("GGs, the computer won...");
    } else {
        alert("You both tied... *yawn*");
    }
    humanScore = 0;
    computerScore = 0;
}

playGame()