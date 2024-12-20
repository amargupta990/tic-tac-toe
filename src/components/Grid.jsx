import React, { useState } from 'react';
import Card from './Card';
import isWinner from '../helperFun';

const Grid = ({ numberOfCard }) => {
  //board is keeping the track of elemnets in the grid
  const [board, setBoard] = useState(Array(numberOfCard).fill(null));
  //turn is keeping the track of the current player
  const [turn, setTurn] = useState(true);
  //winner is keeping the track of the winner using  A boolean value
  const [winner, setWinner] = useState(null);
//on play function is used to play the game and its does multiple task 
// like checking the winner and updating the board and turn
  function play(index) {
    //firstly checking if the board is already filled or winner is already declared
    if (board[index] || winner) return;
//if not then updating the board and checking the winner
    const newBoard = [...board];
    //and updating the board with the current player if true then x else o
    newBoard[index] = turn ? 'x' : 'o';
//checking the winner
    const win = isWinner(newBoard, turn ? 'x' : 'o');
    //if winner is declared then updating the winner
    if (win) {
      setWinner(turn ? 'x' : 'o');
    }
//setting the board and updating the turn
    setBoard(newBoard);
    setTurn(!turn);
  }
  //resetting the game

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
      //here we are mapping the board and passing the props to the card component
      //here card component is used to display the player and on click it will call the onPlay function
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
