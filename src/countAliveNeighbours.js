import { getNeighbours } from "./getNeighbours";

export function countAliveNeighbours(cellRow, cellColumn, board) {
  const allNeighbours = getNeighbours(cellRow, cellColumn, board);
  return allNeighbours.filter(value => value === true).length;
}
