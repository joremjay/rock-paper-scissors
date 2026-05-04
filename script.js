let round = 0;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


function getHumanChoice() {
    round++;
    return prompt("Round " + round + "/5:\nScore: Human " + humanScore + " | Computer " + computerScore + "\n\nRock Paper Scissors!");
}


function playGame() {

    function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (
        (humanChoice == "rock" && computerChoice == "scissors")
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper") ) {
            humanScore++;
            return console.log("You win! " + humanChoice + " beats " + computerChoice);
        } else if (
            (humanChoice == "rock" && computerChoice == "paper")
            || (humanChoice == "paper" && computerChoice == "scissors")
            || (humanChoice == "scissors" && computerChoice == "rock")
        ) {
    computerScore++;
            return console.log("You lose! " + computerChoice + " beats " + humanChoice);
        } else {
            return console.log("Draw! Both selected + " + humanChoice);
        }
    }
    for(let i=1;i<=5;i++){
        console.log("Round " + i);
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Score: Human " + humanScore + ", Computer " + computerScore + "\n\n");
    }
    if (humanScore > computerScore) {
        console.log("You win the game!\nFinal result: Human " + humanScore + ", Computer " + computerScore);
        alert("You win the game!\nFinal result: Human " + humanScore + ", Computer " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("You lose the game!\nFinal result: Human " + humanScore + ", Computer " + computerScore);
        alert("You lose the game!\nFinal result: Human " + humanScore + ", Computer " + computerScore);
    } else {
        console.log("The game is a draw!\nFinal result: Human " + humanScore + ", Computer " + computerScore);
        alert("The game is a draw!\nFinal result: Human " + humanScore + ", Computer " + computerScore);
    }
}

playGame();