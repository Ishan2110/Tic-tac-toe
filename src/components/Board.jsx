import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isnext, setisnext] = useState(false);

  const handleSquareClick = position => {
    // console.log(position);

    if (board[position]) {
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

  const rendersquare = position => {
    // handleSquareClick(position);
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};

export default Board;
