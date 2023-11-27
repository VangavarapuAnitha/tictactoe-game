import './style.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXnext] = useState(false);
  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'x' : '0';
  const statusMessage = winner
    ? `winner is ${winner} `
    : `next player is ${nextPlayer}`;
  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : '0';
        }
        return squareValue;
      });
    });
    setIsXnext(currentIsXNext => !currentIsXNext);
  };
  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
