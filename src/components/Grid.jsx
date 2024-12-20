import React, { useState } from 'react';
import Card from './Card';
import isWinner from '../helperFun';

const Grid = ({ numberOfCard }) => {
  const [board, setBoard] = useState(Array(numberOfCard).fill(null));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn ? 'x' : 'o';

    const win = isWinner(newBoard, turn ? 'x' : 'o');
    if (win) {
      setWinner(turn ? 'x' : 'o');
    }

    setBoard(newBoard);
    setTurn(!turn);
  }

  function resetGame() {
    setBoard(Array(numberOfCard).fill(null));
    setWinner(null);
    setTurn(true);
  }

  return (
    <div className="container">
      {winner && (
        <>
          <h1 className="winner-highlighter">Winner is: {winner}</h1>
          <button onClick={resetGame}>Reset</button>
        </>
      )}

      <h1 className="turn-highlighter">Current turn: {turn ? 'x' : 'o'}</h1>

      <div className="grid">
        {board.map((el, index) => (
          <Card
            key={index}
            player={el}
            onPlay={play}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
