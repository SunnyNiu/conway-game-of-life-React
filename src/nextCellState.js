import { isOverPopulated } from './isOverPopulated'
import { isUnderPopulated } from './isUnderPopulated'
import { isRessurectable } from './isRessurectable'

export function nextCellState (cellState, neighbourCount) {
  if (cellState) {
    return !(
      isOverPopulated(neighbourCount) || isUnderPopulated(neighbourCount)
    )
  }
  return isRessurectable(neighbourCount)
}
