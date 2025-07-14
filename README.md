# The Odin Project: Rock Paper Scissors

Part of Odin Foundations course

🔗 **[App live demo](https://markosoldo.github.io/odin-rock-paper-scissors/)**

## Short Description

A simple Rock paper scissors game with variation.
Play popular version of the game (Rock-Paper-Scissors-Lizard-Spock) and test you luck against the computer.

## Startup Instructions

To run the app locally, open the `index.html` file in your preferred web browser. You can do this by simply double-clicking the `index.html` file or by running a local server if you prefer.

Example (using terminal):

```bash
# Navigate to the project directory (replace with the actual path)
cd /your/path/to/odin-rock-paper-scissors/

# Start a simple HTTP server using Python 3 (port 8000 is default)
python3 -m http.server 8000

# Open your browser and go to:
http://localhost:8000
```

Alternatively, if you are opening directly:

- On Windows: double-click `index.html`
- On Mac/Linux: open in your browser via file explorer or terminal

## How It Works

The player selects a move by clicking one of the five symbol buttons. The computer randomly picks a move. Game rules are applied to determine the winner of the round. The score updates automatically.

First to reach 5 points wins, and a modal displays the result. A restart button resets the game.

Rules summary (available by clicking question mark icon):

- Scissors cuts Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitates Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporizes Rock
- Rock crushes Scissors

## Project Overview

### File Structure

```
odin-rock-paper-scissors/
├── favicon/               # Icons and web manifest
├── img/                   # Background and rules image
├── index.html             # Main structure and control
├── script.js              # Core JavaScript logic
├── style.css              # Styling and layout
└── README.md              # Project documentation
```

### Key JavaScript Elements

- **Event Listeners:** Handle button clicks and modal toggles.
- **Functions:**
  - `playRound()`: Core function that processes each game round.
  - `scoreRound()`: Applies rules and determines round winner.
  - `updateScoreboard()`: Updates UI and visual feedback.
  - `setGameOver()` / `restartGame()`: Handle game end and reset.

### Usage Summary

- Choose between Rock, Paper, Scissors, Lizard, or Spock to play a round.
- Play against a computer opponent with randomly selected moves.
- Track scores as rounds progress — first to 5 points wins.
- View dynamic feedback and animations for each round.
- Restart the game at any time to play again.
- View the game rules in a pop-up modal.

## Author

This project was created by Marko Soldo. Feel free to fork and improve!
