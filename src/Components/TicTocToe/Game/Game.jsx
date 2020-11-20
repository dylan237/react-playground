// import PropTypes from "prop-types";
import { useState } from "react";
import Board from "../Board";

const calculateWinner = (newBoard) => {
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
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (
      newBoard[a] &&
      newBoard[a] === newBoard[b] &&
      newBoard[a] === newBoard[c]
    ) {
      return newBoard[a];
    }
  }
  return null;
};

export const Game = (prop) => {
  const { className } = prop;
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [historyBoard, setHistoryBoard] = useState([]);

  const judgeNextPlayer = () => {
    const nextPlayer = player === "X" ? "O" : "X";
    setPlayer(nextPlayer);
  };

  const play = (i) => {
    if (winner || board[i]) return;
    setHistoryBoard([...historyBoard, [...board]]);
    const newBoard = [...board];
    newBoard[i] = player;
    setBoard(newBoard);
    const win = calculateWinner(newBoard);
    if (win) setWinner(win);
    judgeNextPlayer(i);
  };

  const handleBack = (step) => {
    const targetVersion = [...historyBoard[step]];
    const resetHistoryBoard = historyBoard.slice(0, step);
    setWinner(null);
    setPlayer(step % 2 === 0 ? "X" : "O");
    setHistoryBoard(resetHistoryBoard);
    setBoard(targetVersion);
  };

  const history = () => {
    return historyBoard.map((_, idx) => {
      return (
        <li key={`${`${idx}_index`}`}>
          {`#${idx + 1}. `}
          <button
            type="button"
            className="history__item"
            onClick={() => handleBack(idx)}
          >
            {idx === 0 ? "Reset" : `Go to move #${idx}`}
          </button>
        </li>
      );
    });
  };

  const title = winner ? "The winner: " : "Next player: ";
  const currPlayerOrWinner = winner || player;

  return (
    <div className={className}>
      <div className="game">
        <p>
          {title}
          {currPlayerOrWinner}
        </p>
        <div className="board">
          <Board board={board} play={(i) => play(i)} />
        </div>
        <ul className="history">{history()}</ul>
      </div>
    </div>
  );
};
