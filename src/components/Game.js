import React, { Component } from "react";
import Board from "./../containers/Board";
import GameInfo from "./GameInfo";
import Button from "./Button";

export default class Game extends Component {
  render() {
    const { info, resetGame } = this.props;
    return (
      <div className="game">
        <GameInfo title={info} />
        <Board />
        <Button id="resetButton" title="Restart" onClick={resetGame} />
      </div>
    );
  }
}
