import createMatrix from '../utility'
const INITIAL_STATE = {
  matrix: createMatrix(40),
  size: 40,
  selected: '',
  startOrStop: 'Start',
  speed: 1
}

const gameReducer = (state=INITIAL_STATE, action) =>{
  switch (action.type){
    case 'SET_NEW_BOARD':{
      return {...state, matrix:action.payload}
    }
    case 'SET_START_OR_STOP':{
      return {...state, startOrStop:action.payload}
    }
    case 'SET_SELECTED_TYPE':{
      return {...state, selected:action.payload}
    } 
    case 'SET_SPEED':{
      return {...state, speed:action.payload}
    }
    default:
      return state
  }

}

export default gameReducer
