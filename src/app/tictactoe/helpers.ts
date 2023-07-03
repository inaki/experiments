// export const winningCombinations = [
//   // Horizontal rows
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],

//   // Vertical columns
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],

//   // Diagonals
//   [0, 4, 8],
//   [2, 4, 6],
// ];

export function checkWinner(board: Array<Array<"X" | "O" | null>>) {
  // check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return board[i][0];
    }
  }
  // check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i];
    }
  }
  // check diagonals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0];
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[0][2];
  }
  return null;
}

export const cellBorder = (rIdx: number, cIdx: number) => {
  if (rIdx === 0 && cIdx === 0) {
    return "border-b-2 border-r-2 border-gray-400";
  } else if (rIdx === 1 && cIdx === 0) {
    return "border-r-2 border-l-1 border-gray-400";
  } else if (rIdx === 2 && cIdx === 0) {
    return "border-t-2 border-r-2 border-gray-400";
  } else if (rIdx === 0 && cIdx === 1) {
    return "border-b-2 border-r-2 border-gray-400";
  } else if (rIdx === 1 && cIdx === 1) {
    return "border-r-2 border-gray-400";
  } else if (rIdx === 2 && cIdx === 1) {
    return "border-t-2 border-r-2 border-gray-400";
  } else if (rIdx === 0 && cIdx === 2) {
    return "border-b-2 border-r-2 border-gray-400";
  } else if (rIdx === 1 && cIdx === 2) {
    return "border-r-2 border-gray-400";
  } else if (rIdx === 2 && cIdx === 2) {
    return "border-t-2 border-r-2 border-gray-400";
  } else {
    return "";
  }
};
