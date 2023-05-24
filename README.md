# Tic Tac Toe Game

This is a simple Tic Tac Toe game built using React and styled with Tailwind CSS. The game allows one player to play against the computer or two players to play against each other.

## Demo

[Play Tic Tac Toe](https://easypuzzle.netlify.app/)
[(https://easypuzzle.netlify.app/)](https://easypuzzle.netlify.app/)

## Features

- Play against the computer or a friend in two-player mode.
- Three difficulty modes for computer player: easy, medium, and hard.
- Responsive and visually appealing user interface.
- Dynamic updating of the game board and player turns.
- Intelligent computer moves based on the selected difficulty mode.

## Installation and Usage

1. Clone the repository or download the source code.
2. Install the dependencies by running the command:


npm install

3. Start the development server with:


npm start

4. Open your web browser and navigate to `http://localhost:3000` to play the game.

## How to Play

1. Choose the game mode: against the computer or two-player mode.
2. If playing against the computer, select the difficulty mode: easy, medium, or hard.
3. Click on any empty cell in the grid to make a move.
4. The game will alternate between the players (X and O) until a player wins or the game ends in a draw.
5. If playing against the computer, the computer will automatically make its move based on the selected difficulty mode.

## Code Overview

The main game logic is implemented in the `TicTacToe` component in the `TicTacToe.js` file. Here are the key functions and components in the code:

- `makeMove`: Handles the player's move and updates the game board state.
- `moveMid`: Implements the medium-level strategy for the computer's move.
- `makeMoveEasy` and `makeMoveMedium`: Functions that make the computer's move in easy and medium difficulty modes.
- `resetGame`: Resets the game to the initial state.
- `handleToggle`: Toggles the game mode between against the computer and two-player mode.

## Rendering and Styling

The Tic Tac Toe game is rendered using React components and styled using Tailwind CSS. The game board is displayed as a grid of cells, with each cell represented by a `<div>` element. The state of the game is stored using React's `useState` hook, allowing for dynamic updates and rendering of the game board. CSS classes from Tailwind CSS are applied to style the elements, providing a visually appealing and responsive user interface.

## Customize

You can customize the appearance and behavior of the Tic Tac Toe game by modifying the styling in the `TicTacToe.js` file and tailoring it to match your desired design preferences.

## Conclusion

The Tic Tac Toe game is a fun and interactive way to play the classic game online. With the ability to play against the computer or a friend, and adjustable difficulty levels, this game provides a challenging and enjoyable experience for players of all ages. Feel free to use and modify this code to create your own version of the game!

If you encounter any issues or have suggestions for improvements, please don't hesitate to [open an issue](https://github.com/yourusername/tic-tac-toe-game/issues) or contribute to the project.

Happy gaming!
