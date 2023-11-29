const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'x' : '0';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div>
          winner is{''}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </div>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <div>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">0</span>Tied
        </div>
      );
    }
    return (
      <div>
        next player is{' '}
        <span className={isXNext ? 'text-green' : 'text-orange'}>
          {nextPlayer}
        </span>
      </div>
    );
  };
  return <div className="status-message ">{renderStatusMessage()}</div>;
};
export default StatusMessage;
