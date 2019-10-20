const isOverPopulated = require("./isOverPopulated");
const isUnderPopulated = require("./isUnderPopulated");
const isRessurectable = require("./isRessurectable");

function nextCellState(cellState, neighbourCount) {
  if (cellState) {
    return !(
      isOverPopulated(neighbourCount) || isUnderPopulated(neighbourCount)
    );
  }
  return isRessurectable(neighbourCount);
}

module.exports = nextCellState;
