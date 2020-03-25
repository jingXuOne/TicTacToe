import React, { Component } from "react";
import Board from "./Board";
import GameInfo from "./GameInfo";
import Button from "./Button";

export default class Game extends Component {
  render() {
    const { info, squares, line, resetGame, handleSquareClick } = this.props;
    return (
      <div className="game">
        <GameInfo title={info} />
        <Board
          squares={squares}
          handleSquareClick={handleSquareClick}
          winLine={line}
        />
        <Button class="btn" title="Restart" onClick={resetGame} />
      </div>
    );
  }
}
