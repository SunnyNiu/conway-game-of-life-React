import { indicesAreOutOfBounds } from "./indicesAreOutOfBounds";

export function getNeighbours(cellRow, cellColumn, board) {
  const allNeighbourPositions = [
    [cellRow - 1, cellColumn - 1],
    [cellRow - 1, cellColumn],
    [cellRow - 1, cellColumn + 1],
    [cellRow, cellColumn - 1],
    [cellRow, cellColumn + 1],
    [cellRow + 1, cellColumn - 1],
    [cellRow + 1, cellColumn],
    [cellRow + 1, cellColumn + 1]
  ];

  return allNeighbourPositions
    .filter(([x, y]) => !indicesAreOutOfBounds(x, y, board))
    .map(([x, y]) => board[x][y]);
}
