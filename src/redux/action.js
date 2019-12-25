export const newBoard = (newBoard) => ({
  type: 'SET_NEW_BOARD',
  payload: newBoard
})

export const setStart = () => ({
  type: 'SET_START',
  payload: 'Stop'
})

export const setStop = () => ({
  type: 'SET_STOP',
  payload: 'Start'
})

export const setSelectedType = (type) => ({
  type: 'SET_SELECTED_TYPE',
  payload: type
})

export const setSpeed = (speed) => ({
  type: 'SET_SPEED',
  payload: speed
})
