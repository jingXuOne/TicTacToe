import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        {this.props.squares.map((value, index) => {
          return (
            <Square
              onClick={() => this.props.onClick(index)}
              player={value}
              squareId={index}
              key={index}
              highLight={this.props.winResult.includes(index)}
            />
          );
        })}
      </div>
    );
  }
}
