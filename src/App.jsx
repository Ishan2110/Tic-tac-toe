import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/helper';
import History from './components/History';
import Statusmsg from './components/Statusmsg';
import './styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isnext: false },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  // console.log(history);

  const { winner, winningSquares } = calculateWinner(current.board);
  // console.log(winner);

  // const message = winner
  //   ? `Winner is ${winner}`
  //   : `Next player is ${current.isnext ? 'O' : 'X'}`;

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

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        {' '}
        Tic <span className="text-green">Tac</span> Toe{' '}
      </h1>

      <Statusmsg winner={winner} current={current} />

      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`} // Dynamic-CSS
      >
        Start new game
      </button>
      <h2 style={{ fontWeight: 'normal' }}>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
