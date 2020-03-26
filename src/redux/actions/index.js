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

const checkWin = () => ({
  type: types.CHECK_WIN
});

const setGameTie = () => ({
  type: types.SET_GAMETIE
});

const setWinner = (winner, line) => ({
  type: types.SET_WINNER,
  winner,
  line
});

const changePlayer = () => ({
  type: types.CHANGEPALYER
});

const aiPlay = () => ({
  type: types.AIPLAY
});
export {
  resetGame,
  move,
  aiPlay,
  checkWin,
  setWinner,
  setGameTie,
  changePlayer
};
