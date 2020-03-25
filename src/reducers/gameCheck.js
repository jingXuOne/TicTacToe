const winResults = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];

const checkWinner = (player, squares = []) => {
  const indices = squares
    .map((e, index) => (e === player ? index : ""))
    .filter(String);
  if (indices.length < 3) {
    return { isWin: false };
  }
  for (const result of winResults) {
    const isWin = result.every(v => indices.indexOf(v) > -1);
    if (isWin) {
      return { isWin: true, winner: player, line: result };
    }
  }
  return { isWin: false };
};

const checkAvailable = (position, squares) => {
  return squares && squares[position] !== "";
};

export { checkWinner, checkAvailable };
