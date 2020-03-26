// import React, { Component } from "react";
// import GameInfo from "./GameInfo";
// import Button from "./Button";
// import Board from "./../containers/Board";

// export default class Game extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: [],
//       boardStatus: {
//         start: "visible",
//         clear: "hidden",
//         info: "Next Player X",
//         winResult: []
//       }
//     };
//     this.startGame = this.startGame.bind(this);
//     this.clearGame = this.clearGame.bind(this);
//     this.handleSquareClick = this.handleSquareClick.bind(this);
//   }

//   startGame() {
//     this.setState({
//       isStarted: true,
//       isPlayerX: true,
//       squares: Array(9).fill(""),
//       boardStatus: {
//         start: "hidden",
//         clear: "visible",
//         info: "Next Player X",
//         winResult: []
//       }
//     });
//   }

//   clearGame() {
//     this.setState({
//       isStarted: true,
//       isPlayerX: true,
//       squares: Array(9).fill(""),
//       boardStatus: {
//         start: "hidden",
//         clear: "visible",
//         info: "Next Player X",
//         winResult: []
//       }
//     });
//   }

//   gameOver({ winner, winResult }) {
//     this.setState({
//       isStarted: false,
//       boardStatus: {
//         start: "visible",
//         clear: "hidden",
//         info: `Player ${winner} Win! click start button to continuer.`,
//         winResult
//       }
//     });
//   }

//   gameTie() {
//     this.setState({
//       isStarted: false,
//       boardStatus: {
//         start: "visible",
//         clear: "hidden",
//         info: "Game Tie!! click start button to continuer."
//       }
//     });
//   }
//   checkWinner() {
//     const playerSymbol = this.state.isPlayerX ? "X" : "O";
//     //find all index with symbol "x" or "o";
//     const indices = this.state.squares
//       .map((e, index) => (e === playerSymbol ? index : ""))
//       .filter(String);
//     if (indices.length < 3) {
//       return { isWin: false };
//     }
//     for (const result of winResults) {
//       const isWin = result.every(v => indices.indexOf(v) > -1);
//       if (isWin) {
//         return { isWin: true, winner: playerSymbol, winResult: result };
//       }
//     }
//     return { isWin: false };
//   }

//   handleSquareClick(i) {
//     if (!this.state.isStarted) {
//       return;
//     }
//     if (this.state.squares[i] !== "") {
//       return;
//     }
//     let squares = Array.from(this.state.squares);
//     squares[i] = this.state.isPlayerX ? "X" : "O";

//     this.setState(
//       {
//         squares
//       },
//       () => {
//         //check winner
//         const checkResult = this.checkWinner();
//         if (checkResult.isWin) {
//           this.gameOver(checkResult);
//           return;
//         }
//         //check tie
//         if (!this.state.squares.some(val => val === "")) {
//           this.gameTie();
//           return;
//         }
//         this.setState(prevState => ({
//           isPlayerX: !prevState.isPlayerX,
//           boardStatus: {
//             ...this.state.boardStatus,
//             info: `Next Player ${!this.state.isPlayerX ? "X" : "O"}`
//           }
//         }));
//       }
//     );
//   }
//   render() {
//     console.log("Game", this.props);
//     return (
//       <div className="game">
//         <h1>Tic Tac Toe</h1>
//         <div>
//           <Button
//             id="startButton"
//             title="Start"
//             onClick={this.startGame}
//             visibility={this.state.boardStatus.start}
//           />
//           <Button
//             id="clearButton"
//             title="Clear"
//             onClick={this.clearGame}
//             visibility={this.state.boardStatus.clear}
//           />
//           <GameInfo title={this.state.boardStatus.info} />
//         </div>
//         <div className="board">
//           <Board
//             squares={this.state.squares}
//             onClick={this.handleSquareClick}
//             winResult={this.state.boardStatus.winResult}
//           />
//         </div>
//       </div>
//     );
//   }
// }
