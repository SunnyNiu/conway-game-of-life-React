import createMatrix from '../utility'
const INITIAL_STATE = {
  matrix: createMatrix(40),
  size: 40,
  selected: '',
  isRunning: false,
  speed: 1
}

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_NEW_BOARD': {
      return { ...state, matrix: action.payload }
    }
    case 'START_GAME': {
      return { ...state, isRunning: true }
    }
    case 'STOP_GAME': {
      return { ...state, isRunning: false }
    }
    case 'SET_SELECTED_TYPE': {
      return { ...state, selected: action.payload }
    }
    case 'SET_SPEED': {
      return { ...state, speed: action.payload }
    }
    default:
      return state
  }
}

export default gameReducer
