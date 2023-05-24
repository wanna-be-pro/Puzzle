import React, { useEffect, useState } from 'react';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [mode, setMode] = useState('medium');

    useEffect(() => {
        if (currentPlayer === 'O' && !winner) {
            if (mode === 'easy') {
                makeMoveEasy();
            } else if (mode === 'medium') {
                makeMoveMedium();
            } else if (mode === 'hard') {
                makeMoveHard();
            }
        }
    }, [currentPlayer, winner]);

    const checkWinner = (board) => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
                return board[a];
            }
        }

        return null;
    };

    const makeMove = (index) => {
        if (board[index] === '' && !winner) {
            const newBoard = [...board];
            newBoard[index] = currentPlayer;
            setBoard(newBoard);

            const gameWinner = checkWinner(newBoard);
            if (gameWinner) {
                setWinner(gameWinner);
            } else if (newBoard.indexOf('') === -1) {
                setWinner('draw');
            } else {
                setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
            }
        }
    };


    // midium move
    const moveMid = (board) => {
        const winningPositions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        const emptyCells = board.reduce((acc, cell, index) => {
            if (cell === '') {
                acc.push(index);
            }
            return acc;
        }, []);

        const checkWinningPosition = (player) => {
            for (const positions of winningPositions) {
                const [a, b, c] = positions;
                if (board[a] === player && board[b] === player && board[c] === '') {
                    return c;
                } else if (board[a] === player && board[b] === '' && board[c] === player) {
                    return b;
                } else if (board[a] === '' && board[b] === player && board[c] === player) {
                    return a;
                }
            }
            return -1;
        };
        const oWinningPosition = checkWinningPosition('O');
        if (oWinningPosition !== -1) {
            return oWinningPosition;
        }


        const xWinningPosition = checkWinningPosition('X');
        if (xWinningPosition !== -1) {
            return xWinningPosition;
        }



        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            return emptyCells[randomIndex];
        }

        // If no winning positions and no empty cells, return -1 to indicate an invalid move
        return -1;
    };




    const makeMoveEasy = () => {
        const emptyCells = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                emptyCells.push(i);
            }
        }

        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const randomMoveIndex = emptyCells[randomIndex];

        setTimeout(() => {
            makeMove(randomMoveIndex);
        }, 50); // Delay the move by 500 milliseconds (adjust as needed)
    };

    const makeMoveMedium = () => {
        // Implement your medium mode logic here
        // This function should make a move based on a medium-level strategy
        const emptyCells = [];
        const xsCells = []
        const osCells = []
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                emptyCells.push(i);
            }
            else if (board[i] === "X") {
                xsCells.push(i)
            }
            else if (board[i] === "O") {
                osCells.push(i)
            }
        }
        // const randomIndex = Math.floor(Math.random() * emptyCells.length);
        // const randomMoveIndex = emptyCells[randomIndex];
        const moveIndex = moveMid(board)
        console.log(moveIndex)

        setTimeout(() => {
            // makeMove(randomMoveIndex);
            makeMove(moveIndex);
        }, 200); // Delay the move by 500 milliseconds (adjust as needed)
    };

    const makeMoveHard = () => {
        // Implement your hard mode logic here
        // This function should make a move based on a hard-level strategy
    };

    const resetGame = () => {
        setBoard(Array(9).fill(''));
        setCurrentPlayer('X');
        setWinner(null);
    };
    return (
        <>
            <div className="flex justify-center items-center  mb-8">
                <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
                    {winner ? (
                        <div className="text-xl font-bold  mb-4">
                            {winner === 'draw' ? "It's a draw!" : `Player ${winner} wins!`}
                        </div>
                    ) : <div className="text-2xl font-bold h-7 mb-4">
                    </div>}
                    {/* <div className="mb-4">
                        <label className="mr-2">Select mode:</label>
                        <select
                        className='bg-white text-black px-2 py-1 border-gray-200'
                            value={mode}
                            onChange={(e) => {
                                resetGame();
                                setMode(e.target.value);
                            }}
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div> */}
                    <div className="grid grid-cols-3 gap-2">

                        {board.map((cell, index) => (
                            <div
                                key={index}
                                className="bg-[#467cf05e] rounded text-white text-4xl font-bold flex select-none justify-center items-center w-20  h-20 cursor-pointer"
                                onClick={() => makeMove(index)}
                            >
                                {cell}
                            </div>
                        ))}
                    </div>




                    <button
                        className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={resetGame}
                    >
                        Reset Game
                    </button>
                </div>

            </div>
            {/* 
            <div className="flex justify-center items-center ">
                <div className="w-64 flex flex-col justify-center">
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold mb-2 text-center">Tic Tac Toe</h1>
                        {winner ? (
                            <div className="bg-green-200 text-center text-green-700 px-4 py-2 mb-2">
                                Player {winner} wins!

                            </div>
                        ) : (
                            <div className="bg-gray-200 rounded text-center  text-gray-700 px-4 py-2 mb-2">
                                Player {player}'s turn
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {board.map((cell, index) => (
                            <div
                                key={index}
                                className="bg-[#467cf05e] rounded text-white text-4xl font-bold flex select-none justify-center items-center  h-20 cursor-pointer"
                                onClick={() => handleClick(index)}
                            >
                                {cell}
                            </div>
                        ))}
                    </div>
                    <button
                        className="bg-[#dddd] ml-0 text-[#202726] btn border-0 hover:bg-[#d4e4e7c5] px-4 py-2 mt-4"
                        onClick={resetGame}
                    >
                        Reset
                    </button>
                </div>
            </div> */}
        </>
    );
};

export default TicTacToe;