import * as types from "./../actions/types";

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
    case types.AIPLAY:
      return {
        ...state,
        info: "AI Player's TURN"
      };
    case types.SET_WINNER:
      return {
        ...state,
        info: `Game Over ${action.winner} Win`,
        isOver: true,
        result: {
          winner: action.winner,
          line: action.line
        }
      };

    case types.SET_GAMETIE:
      return {
        ...state,
        info: `Game Tie!!!`,
        isOver: true
      };
    case types.CHANGEPALYER:
      return {
        ...state,
        isPlayerX: !state.isPlayerX,
        info: state.isPlayerX ? "Next player:O" : "Next player:X"
      };
    case types.MOVE: {
      const newSquares = Array.from(state.squares);
      const symbol = state.isPlayerX ? "X" : "O";
      newSquares[action.index] = symbol;

      return {
        ...state,
        squares: newSquares
        //isPlayerX: !state.isPlayerX,
        //info: state.isPlayerX ? "Next player:O" : "Next player:X"
      };
    }
    default:
      return state;
  }
};

export default reducer;
