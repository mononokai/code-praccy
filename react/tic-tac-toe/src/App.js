import React from 'react';
import { useState } from 'react';

// ----- This is a Component ----- //
function Square({ value, onSquareClick }) {
    // ----- className and onClick are Props ----- //
    return (
        <button className="square" onClick={ onSquareClick }>
            { value }
        </button>
    );
}

// ----- This is a Component ----- //
function Board({ xIsNext, squares, onPlay }) {
    // // ----- This is a State ----- //
    // const [xIsNext, setXIsNext] = useState(true);
    // // ----- This is a State ----- //
    // // Declaring state named 'squares' with a default of an array of 9 squares
    // const [squares, setSquares] = useState(Array(9).fill(null)); // Array(9).fill(null) is creating the array with nine elements, then setting each value to null
    // // Each value in the array corresponds to a value of a square on the board
    // ↑ These states are no longer necessary after moving their functions to the parent component, Game ↑

    // Creating a copy of the squares array
    function handleClick(i) {
        // Catch squares that already hold values or if a player has won
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        // Storing the squares copy in nextSquares using the slice() method
        const nextSquares = squares.slice();
        // Check if X will be the em
        if (xIsNext) {
            // Updating the array to add X to the square with index[i]
            nextSquares[i] = 'X';
        }
        else {
            // Updating the array to add X to the square with index[i]
            nextSquares[i] = 'O';
        }
        // // Calling setSquares() tells React that the state of the component has changed
        // // This causes a re-render of the components using the squares state and its child components, which are the squares on the board
        // setSquares(nextSquares);
        // // Flip the value of xIsNext to change turns
        // setXIsNext(!xIsNext);
        // ↑ These states are no longer necessary after moving their functions to the parent component, Game ↑

        // The onPlay function lets the Game component update the Board when a square is clicked
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner: ${ winner }`;
    }
    else {
        status = `Next player: ${ xIsNext ? "X" : "O" }`;
    }

    // When the square is clicked, the arrow function below is called. If we were to just use onSquareClick={ handleClick() },
    // it would be calling the function on load. That can be avoided this way.
    return (
        <>
            <div className="status">{ status }</div>
            <div className="board-row">
                <Square value={ squares[0] } onSquareClick={ () => handleClick(0) } />
                <Square value={ squares[1] } onSquareClick={ () => handleClick(1) } />
                <Square value={ squares[2] } onSquareClick={ () => handleClick(2) } />
            </div>
            <div className="board-row">
                <Square value={ squares[3] } onSquareClick={ () => handleClick(3) } />
                <Square value={ squares[4] } onSquareClick={ () => handleClick(4) } />
                <Square value={ squares[5] } onSquareClick={ () => handleClick(5) } />
            </div>
            <div className="board-row">
                <Square value={ squares[6] } onSquareClick={ () => handleClick(6) } />
                <Square value={ squares[7] } onSquareClick={ () => handleClick(7) } />
                <Square value={ squares[8] } onSquareClick={ () => handleClick(8) } />
            </div>
        </>
    );
}

export default function Game() {
    // State - keeps track of whether it is X or O's turn
    const [xIsNext, setXIsNext] = useState(true);
    // State - keeps an array of previous Board states stored as arrays
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // State - keeps track of the current move number
    const [currentMove, setCurrentMove] = useState(0);
    // Pulls the current Board state from history
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        // // Creating a new array that contains all of the items in history with nextSquares appended
        // setHistory([...history, nextSquares]);
        // ↑ These states are no longer necessary after moving their functions to the parent component, Game ↑
        
        // If you switch to a previous move, then make a move from there, the history of Board states up until that point
        // will be saved in the array below with the next Board state appended.
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        // Setting the current history State to the array stored in the nextHistory array
        setHistory(nextHistory);
        // Setting the currentMove number state to the correct index of the nextHistory array
        setCurrentMove(nextHistory.length - 1)
        // Flip xIsNext boolean
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        // Selects the currentMove state to the move number that is given as an argument
        setCurrentMove(nextMove);
        // Set xIsNext to True if the currentMove number is even, False if odd
        setXIsNext(nextMove % 2 === 0)
    }

    const moves = history.map((squares, move) => {
        let description;
        console.log(`move: ${move}`)
        console.log(`currentMove: ${currentMove}`)
        if (move === currentMove) {
            description = `You are at move #${ move }`

            return (
            <li key={ move }>
                <p>{ description }</p>
            </li>
            );
        }
        else {
            if (move > 0) {
                description = `Go to move #${ move }`;
            }
            else {
                description = `Go to game start`;
            }
            return (
                <li key={ move } >
                    <button onClick={ () => jumpTo(move) } >{ description }</button>
                </li>
            );
        }
    });

    // It is **strongly** recommended to assign proper keys whenever you build dynamic lists
    // Using the array index as a key can cause issues when trying to re-order a list's items or
    // when inserting or removing items from the list. Passing the key={i} prop silences the error,
    // but will still have the same problems as array indices
    // Keys do not need to be globally unique.
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={ xIsNext } squares={ currentSquares } onPlay={ handlePlay } />
            </div>
            <div className="game-info">
                <ol>{ moves }</ol>
            </div>
        </div>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null;
}