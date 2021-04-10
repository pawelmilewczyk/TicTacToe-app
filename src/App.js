import React, { useState } from "react";
import classes from "./App.module.scss";

import Aux from "./hoc/Aux/Aux";
import Button from "./components/Button/Button";
import NextButton from "./components/Button/NextButton";
import Square from "./components/Square/Square";
import Winner from "./components/Winner/Winner";
import NextMove from "./components/NextMove/NextMove";
import Scores from "./components/Scores/Scores";
import Modal from "./components/Modal/Modal";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextMoveX, setNextMoveX] = useState(true);
  const [player1starts, setPlayer1starts] = useState(true);
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [score, setScore] = useState([0, 0]);
  const [nextRound, setNextRound] = useState(true);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleStart = (e) => {
    e.preventDefault();
    const inputPlayer1 = document.getElementById("Player1");
    const inputPlayer2 = document.getElementById("Player2");
    if (inputPlayer1.value !== "") setPlayer1Name(inputPlayer1.value);
    if (inputPlayer2.value !== "") setPlayer2Name(inputPlayer2.value);
    setNextRound(false);
    setStartGame(true);
  };

  const handleNextRound = () => {
    setSquares(Array(9).fill(null));
    setNextMoveX(true);
    setPlayer1starts(!player1starts);
    setNextRound(false);
  };
  const handleResetGame = () => {
    setSquares(Array(9).fill(null));
    setNextMoveX(true);
    setPlayer1starts(true);
    setScore([0, 0]);
    setNextRound(false);
  };

  const handleClick = (i) => {
    const updatedSquares = squares;
    updatedSquares[i] = nextMoveX ? "X" : "O";
    setSquares(updatedSquares);
    setNextMoveX(!nextMoveX);

    if (
      (player1starts && calculateWinner(squares) === "X") ||
      (!player1starts && calculateWinner(squares) === "O")
    ) {
      setScore([score[0] + 1, score[1]]);
      setNextRound(true);
      setWinner(`${player1Name} WIN!`);
    }
    if (
      (player1starts && calculateWinner(squares) === "O") ||
      (!player1starts && calculateWinner(squares) === "X")
    ) {
      setScore([score[0], score[1] + 1]);
      setNextRound(true);
      setWinner(`${player2Name} WIN!`);
    }

    if (
      !squares.some((square) => square === null) &&
      !calculateWinner(squares)
    ) {
      setWinner("DRAW");
      setNextRound(true);
    }
  };

  const renderSquare = (i) => {
    return (
      <Square
        disabled={nextRound}
        value={squares[i]}
        clicked={() => handleClick(i)}
      />
    );
  };

  const gridClasses = nextRound
    ? [classes.Hidden, classes.Grid].join(" ")
    : classes.Grid;

  const AppClasses = startGame
    ? classes.App
    : [classes.App, classes.Blur].join(" ");

  return (
    <Aux>
      <div className={AppClasses}>
        <Scores
          player1={score[0]}
          player1name={player1Name}
          player2={score[1]}
          player2name={player2Name}
        />
        <NextMove
          isNextX={nextMoveX}
          changePlayer={!player1starts}
          isNextRound={nextRound}
          player1name={player1Name}
          player2name={player2Name}
        />
        <div className={gridClasses}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <Winner isNextRound={nextRound} winner={winner} />
        <div className={classes.buttons}>
          <NextButton
            clicked={handleNextRound}
            disabled={nextRound}
            content="Next round"
          />
          <Button clicked={handleResetGame} content="Reset game" />
        </div>
      </div>
      <Modal start={startGame} submit={handleStart} />
    </Aux>
  );
}

export default App;
