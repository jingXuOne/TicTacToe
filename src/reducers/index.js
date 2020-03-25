import * as types from "./../actions/types";
import { checkWinner, checkAvailable } from "./gameCheck";

//reducer
const initialState = {
  isPlayerX: true,
  squares: Array(9).fill(""),
  info: "Player1: X First",
  isOver: false,
  result: {
    winner: "",
    line: []
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_GAME:
      return {
        ...initialState
      };
    case types.MOVE:
      if (checkAvailable(action.index, state.squares) || state.isOver) {
        return { ...state };
      }
      const newSquares = Array.from(state.squares);
      const symbol = state.isPlayerX ? "X" : "O";
      newSquares[action.index] = symbol;

      //check win
      const { isWin, winner, line } = checkWinner(symbol, newSquares);
      if (isWin) {
        return {
          ...state,
          squares: newSquares,
          info: `Player ${symbol} Win!!!`,
          isOver: true,
          result: {
            ...state.result,
            winner,
            line
          }
        };
      }

      //check tie
      if (!newSquares.some(val => val === "")) {
        return {
          ...state,
          squares: newSquares,
          info: `Game Tie!!!`,
          isOver: true
        };
      }
      return {
        ...state,
        squares: newSquares,
        isPlayerX: !state.isPlayerX,
        info: state.isPlayerX ? "Next player:O" : "Next player:X"
      };
    default:
      return state;
  }
};

export default reducer;
