import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/helper';
import History from './components/History';
import './styles/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isnext: false },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  // console.log(history);

  const winner = calculateWinner(current.board);
  // console.log(winner);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isnext ? 'O' : 'X'}`;

  const handleSquareClick = position => {
    // console.log(position);

    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const Newboard = last.board.map((value, index) => {
        if (index === position) {
          return last.isnext ? 'O' : 'X';
        }

        return value;
      });

      return prev.concat({ board: Newboard, isnext: !last.isnext });
    });

    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    // console.log(50);
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1> Tic Tac Toe </h1>
      <h2>{message}</h2>

      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
