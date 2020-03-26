import * as types from "./../actions/types";
import {
  move,
  checkWin,
  setWinner,
  aiPlay,
  setGameTie,
  changePlayer
} from "./../actions";
import { checkWinner } from "./gameCheck";

const logger = ({ getState, dispatch }) => next => action => {
  console.log("before logger:", action);

  const returnValue = next(action);

  console.log("after logger state:", getState());
  return returnValue;
};

const aiplayer = ({ getState, dispatch }) => next => action => {
  if (action.type === types.CHECK_WIN) {
    const { isPlayerX, squares } = getState();
    const symbol = isPlayerX ? "X" : "O";
    const { isWin, winner, line } = checkWinner(symbol, squares);
    if (isWin) {
      dispatch(setWinner(winner, line));
    } else if (!squares.some(val => val === "")) {
      dispatch(setGameTie());
    } else {
      dispatch(changePlayer());
      if (isPlayerX) {
        dispatch(aiPlay());
      }
    }
  }

  if (action.type === types.AIPLAY) {
    const { squares } = getState();
    const availblePosition = squares
      .map((item, index) => index)
      .filter(index => squares[index] === "");
    console.log(availblePosition);
    console.log(squares);
    const s = Math.floor(Math.random() * availblePosition.length);
    console.log("ai choose", availblePosition[s]);
    dispatch(move(availblePosition[s]));
    dispatch(checkWin());
  }
  /*
Container: => state => readonly
Reducer => state => write/read
Middleware => readonly

Dispatch => middleware => reducer
next(action)

*/

  //check tie

  /*
  if (action.type === types.MOVE) {
    console.log("move action:");
    let returnValue = next(action);

    console.log("move action fini,\nwaiting for AI play.");
    returnValue = next(aiplay);
    console.log("ai play fini");
    return returnValue;
  }
  const returnValue = next(action);
  return returnValue;
  */
  next(action);
};

export { logger, aiplayer };
