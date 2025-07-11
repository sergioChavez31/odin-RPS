function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * 3) + 1;
    let choice;
    switch (choiceIndex) {
        case 1:
            choice = "1, rock";
            break;
        case 2:
            choice = "2, paper";
            break;
        case 3:
            choice = "3, scissors";
            break;
        default:
            choice = "what??"
    }
    return choice;
}

function getHumanChoice() {
    return prompt("Enter Rock, Paper, or scissors!");
}
