// import PropTypes from "prop-types";
import Square from "../Square";

export function Board(prop) {
  const { className = "board", board = [], play = () => {} } = prop;

  const renderSquare = (i, idx) => (
    <Square value={i} key={idx} onClick={() => play(idx)} />
  );

  return (
    <div className={className}>
      <div className="board-main">
        {board.map((i, idx) => renderSquare(i, idx))}
      </div>
    </div>
  );
}

// Board.propTypes = {
//   className: PropTypes.string.isRequired,
//   // board: PropTypes.array.isRequired,
//   play: PropTypes.func.isRequired,
// };
