export const newBoard = (newBoard) =>({
  type:'SET_NEW_BOARD',
  payload:newBoard
})

export const setStartOrStop = (status) =>({
  type:'SET_START_OR_STOP',
  payload:status
})

export const setSelectedType = (type) =>({
  type:'SET_SELECTED_TYPE',
  payload:type
})

export const setSpeed = (speed) =>({
  type:'SET_SPEED',
  payload:speed
})