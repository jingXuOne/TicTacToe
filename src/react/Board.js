// import React, { Component } from "react";
// import Square from "./Square";

// export default class Board extends Component {
//   render() {
//     const { squares, winLine, handleSquareClick } = this.props;
//     return (
//       <div className="board">
//         {squares.map((value, index) => {
//           return (
//             <Square
//               onClick={() => handleSquareClick(index)}
//               player={value}
//               squareId={index}
//               key={index}
//               highLight={winLine.includes(index)}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }
