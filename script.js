//Game logic

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);

  switch (randomChoice) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function getPlayerChoice() {
  const validChoices = ["ROCK", "PAPER", "SCISSORS"];
  let playerChoice = prompt("Choose between ROCK, PAPER or SCISSORS:");

  if (playerChoice === null) return playerChoice;

  while (!validChoices.includes(playerChoice.toUpperCase())) {
    alert(
      "Only ROCK, PAPER and SCISSORS (case insensitive) are valid choices!"
    );
    playerChoice = prompt("Choose between ROCK, PAPER or SCISSORS:");
    if (playerChoice === null) return playerChoice;
  }
  return playerChoice;
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toUpperCase();

  if (playerChoice === computerChoice)
    return `Computer choice: ${computerChoice}. It's a tie!`;
  if (playerChoice === "ROCK") {
    switch (computerChoice) {
      case "PAPER":
        return `Computer choice: ${computerChoice}. PAPER beats ROCK. You lose!`;
      case "SCISSORS":
        return `Computer choice: ${computerChoice}. ROCK beats SCISSORS. You win!`;
    }
  }
  if (playerChoice === "PAPER") {
    switch (computerChoice) {
      case "ROCK":
        return `Computer choice: ${computerChoice}. PAPER beats ROCK. You win!`;
      case "SCISSORS":
        return `Computer choice: ${computerChoice}. SCISSORS beats PAPER. You lose!`;
    }
  }
  if (playerChoice === "SCISSORS") {
    switch (computerChoice) {
      case "PAPER":
        return `Computer choice: ${computerChoice}. SCISSORS beats PAPER. You win!`;
      case "ROCK":
        return `Computer choice: ${computerChoice}. ROCK beats SCISSORS. You lose!`;
    }
  }
}

function logGameResult(playerScore, computerScore) {
  if (playerScore > computerScore)
    console.log(
      `\nComputer score: ${computerScore}\nYour score: ${playerScore}\nYou've won the game!`
    );
  else if (playerScore < computerScore)
    console.log(
      `\nComputer score: ${computerScore}\nYour score: ${playerScore}\nYou've lost the game!`
    );
  else
    console.log(
      `\nComputer score: ${computerScore}\nYour score: ${playerScore}\nIt's a tie!`
    );
}

function playGame() {
  let roundCount = 0;
  let playerScore = 0;
  let computerScore = 0;
  let playerChoice, computerChoice;
  let roundResult;

  console.log("\nNew game:\n");

  while (roundCount < 5) {
    roundCount++;
    computerChoice = getComputerChoice();

    do {
      playerChoice = getPlayerChoice();
      if (playerChoice === null)
        if (window.confirm("Quit current game?")) {
          console.log("\nYou've quit before finishing current game!");
          return;
        }
    } while (playerChoice === null);

    roundResult = playRound(playerChoice, computerChoice);
    console.log(`Round ${roundCount}: ${roundResult}`);

    if (roundResult.includes("You win")) playerScore++;
    else if (roundResult.includes("You lose")) computerScore++;
  }

  logGameResult(playerScore, computerScore);
}

while (window.confirm("Play new game?")) playGame();
