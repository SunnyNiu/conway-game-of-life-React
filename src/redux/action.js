export const newBoard = (newBoard) => ({
  type: 'SET_NEW_BOARD',
  payload: newBoard
})

export const startGame = () => ({
  type: 'START_GAME'
})

export const stopGame = () => ({
  type: 'STOP_GAME'
})

export const setSelectedType = (type) => ({
  type: 'SET_SELECTED_TYPE',
  payload: type
})

export const setSpeed = (speed) => ({
  type: 'SET_SPEED',
  payload: speed
})
