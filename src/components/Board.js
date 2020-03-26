import React from "react";
import Square from "./../containers/Square";
import PropTypes from "prop-types";

class Board extends React.Component {
  render() {
    const { squares, winLine } = this.props;
    return (
      <div className="board">
        {squares.map((value, index) => {
          return (
            <Square
              player={value}
              squareId={index}
              key={index}
              highLight={winLine.includes(index)}
            />
          );
        })}
      </div>
    );
  }
}

Board.defaultProps = {};

Board.propTypes = {
  squares: PropTypes.arrayOf(String).isRequired,
  winLine: PropTypes.arrayOf(Number).isRequired
};
export default Board;
