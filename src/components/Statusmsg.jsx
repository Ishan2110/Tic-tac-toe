import React from 'react';

const Statusmsg = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null); // every is available for all JS arrays

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isnext ? 'text-orange' : 'text-green'}>
            {current.isnext ? 'O' : 'X'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X </span>and{' '}
          <span className="text-orange">O </span> tied
        </>
      )}
    </div>
  );
};
export default Statusmsg;
