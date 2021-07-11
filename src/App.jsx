import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/helper';
import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isnext, setisnext] = useState(false);

  const winner = calculateWinner(board);
  // console.log(winner);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isnext ? 'O' : 'X'}`;

  const handleSquareClick = position => {
    // console.log(position);

    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((value, index) => {
        if (index === position) {
          return isnext ? 'O' : 'X';
        }

        return value;
      });
    });

    setisnext(!isnext);
  };

  return (
    <div className="app">
      <h1> Tic Tac Toe </h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
