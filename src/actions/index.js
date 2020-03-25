import * as types from "./types";

//actions
const resetGame = info => ({
  type: types.RESET_GAME,
  info
});

const move = index => ({
  type: types.MOVE,
  index
});

export { resetGame, move };
