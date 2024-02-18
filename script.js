//Game logic
let computerScore = 0;
let playerScore = 0;

const rockSymbolClass = "fa-solid fa-hand-back-fist symbol";
const paperSymbolClass = "fa-solid fa-hand symbol";
const scissorsSymbolClass = "fa-solid fa-hand-scissors symbol";
const lizardSymbolClass = "fa-solid fa-hand-lizard symbol";
const spockSymbolClass = "fa-solid fa-hand-spock symbol";

const choices = document.querySelector("#containerBtns");
const roundInfo = document.querySelector("#roundInfo");
const roundMsg = document.querySelector("#roundMsg");
const playerSymbol = document.querySelector("#playerSymbol");
const computerSymbol = document.querySelector("#computerSymbol");
const pScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#computerScore");

choices.addEventListener("click", playRound);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 5);

  switch (randomChoice) {
    case 0:
      computerSymbol.classList = rockSymbolClass;
      return "ROCK";
    case 1:
      computerSymbol.classList = paperSymbolClass;
      return "PAPER";
    case 2:
      computerSymbol.classList = scissorsSymbolClass;
      return "SCISSORS";
    case 3:
      computerSymbol.classList = lizardSymbolClass;
      return "LIZARD";
    case 4:
      computerSymbol.classList = spockSymbolClass;
      return "SPOCK";
  }
}

function playRound(e) {
  // HANDLE ENDGAME LOGIC

  let btnId = null;
  let currentNode = e.target;
  let playerChoice, computerChoice;

  if (currentNode.id === "containerBtns") return;
  // Traverse up the DOM tree until we find a button or reach the container
  // For case when symbol inside button is clicked
  while (currentNode.id !== "containerBtns") {
    if (currentNode.tagName === "BUTTON") {
      btnId = currentNode.id;
      break;
    }
    currentNode = currentNode.parentNode;
  }

  switch (btnId) {
    case "rockBtn":
      playerChoice = "ROCK";
      playerSymbol.classList = rockSymbolClass;
      break;
    case "paperBtn":
      playerChoice = "PAPER";
      playerSymbol.classList = paperSymbolClass;
      break;
    case "scissorsBtn":
      playerChoice = "SCISSORS";
      playerSymbol.classList = scissorsSymbolClass;
      break;
    case "lizardBtn":
      playerChoice = "LIZARD";
      playerSymbol.classList = lizardSymbolClass;
      break;
    case "spockBtn":
      playerChoice = "SPOCK";
      playerSymbol.classList = spockSymbolClass;
      break;
  }

  computerChoice = getComputerChoice();
  scoreRound(playerChoice, computerChoice);
}

function scoreRound(playerChoice, computerChoice) {
  /*  
    1 - Player won the round
    0 - Tie
    2 - Computer won the round
  */

  if (playerChoice === computerChoice)
    updateScoreboard(0, playerChoice, computerChoice);
  else if (playerChoice === "ROCK") {
    if (computerChoice === "SCISSORS" || computerChoice === "LIZARD")
      updateScoreboard(1, playerChoice, computerChoice);
    else updateScoreboard(2, playerChoice, computerChoice);
  } else if (playerChoice === "PAPER") {
    if (computerChoice === "ROCK" || computerChoice === "SPOCK")
      updateScoreboard(1, playerChoice, computerChoice);
    else updateScoreboard(2, playerChoice, computerChoice);
  } else if (playerChoice === "SCISSORS") {
    if (computerChoice === "PAPER" || computerChoice === "LIZARD")
      updateScoreboard(1, playerChoice, computerChoice);
    else updateScoreboard(2, playerChoice, computerChoice);
  } else if (playerChoice === "LIZARD") {
    if (computerChoice === "PAPER" || computerChoice === "SPOCK")
      updateScoreboard(1, playerChoice, computerChoice);
    else updateScoreboard(2, playerChoice, computerChoice);
  } else if (playerChoice === "SPOCK") {
    if (computerChoice === "ROCK" || computerChoice === "SCISSORS")
      updateScoreboard(1, playerChoice, computerChoice);
    else updateScoreboard(2, playerChoice, computerChoice);
  }
}

function updateScoreboard(roundResult, playerChoice, computerChoice) {
  let roundWinner = null;
  let roundLoser = null;
  let action = "";

  switch (roundResult) {
    case 0:
      roundInfo.textContent = "It's a tie!";
      break;
    case 1:
      playerScore++;
      roundWinner = playerChoice;
      roundLoser = computerChoice;
      roundInfo.textContent = "You win the round!";
      break;
    case 2:
      computerScore++;
      roundWinner = computerChoice;
      roundLoser = playerChoice;
      roundInfo.textContent = "You lose the round!";
      break;
  }

  if (roundResult === 0)
    roundMsg.textContent = `Both players chose ${playerChoice.toLowerCase()}`;
  else if (roundWinner === "ROCK") action = "crushes";
  else if (roundWinner === "PAPER") {
    switch (roundLoser) {
      case "ROCK":
        action = "covers";
        break;
      case "SPOCK":
        action = "disproves";
    }
  } else if (roundWinner === "SCISSORS") {
    switch (roundLoser) {
      case "PAPER":
        action = "cuts";
        break;
      case "LIZARD":
        action = "decapitates";
    }
  } else if (roundWinner === "LIZARD") {
    switch (roundLoser) {
      case "PAPER":
        action = "eats";
        break;
      case "SPOCK":
        action = "poisons";
    }
  } else if (roundWinner === "SPOCK") {
    switch (roundLoser) {
      case "ROCK":
        action = "vaporizes";
        break;
      case "SCISSORS":
        action = "smashes";
    }
  }

  if (roundResult !== 0)
    roundMsg.innerHTML = `${capitalizeFirstLetter(
      roundWinner
    )} <span style='color: #86c232;'>${action}</span> ${roundLoser.toLowerCase()}`;

  pScore.textContent = `Player: ${playerScore}`;
  cScore.textContent = `Computer: ${computerScore}`;

  // HANDLE ENDGAME LOGIC
}
