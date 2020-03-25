import React from "react";
import Square from "./Square";
import PropTypes from "prop-types";

const Board = ({ squares, winLine, handleSquareClick }) => (
  <div className="board">
    {squares &&
      squares.map((value, index) => {
        return (
          <Square
            onClick={() => handleSquareClick(index)}
            player={value}
            squareId={index}
            key={index}
            highLight={winLine.includes(index)}
          />
        );
      })}
  </div>
);
Board.defaultProps = {
  squares: Array(9).fill(""),
  winLine: []
};

Board.propTypes = {
  squares: PropTypes.arrayOf(String).isRequired,
  winLine: PropTypes.arrayOf(Number).isRequired,
  handleSquareClick: PropTypes.func.isRequired
};
export default Board;
