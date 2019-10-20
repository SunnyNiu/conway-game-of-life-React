const isOutOfBounds = require("./isOutOfBounds");

export function indicesAreOutOfBounds(rowIndex, columnIndex, array) {
  return isOutOfBounds(rowIndex, array) || isOutOfBounds(columnIndex, array);
}
