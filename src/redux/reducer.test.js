import gameReducer from './reducer'

describe('gamereducer tests', () => {
  it('newBoard action sets the new board', () => {
    const currentState = {
      matrix: [[false, false, false], [false, false, false], [false, false, false]],
      size: 3,
      selected: '',
      isRunning: false,
      speed: 1
    }

    const board = [[false, false], [false, false]]
    const action = {
      type: 'SET_NEW_BOARD',
      payload: board
    }
    const expected = {
      matrix: [[false, false], [false, false]],
      size: 3,
      selected: '',
      isRunning: false,
      speed: 1
    }
    const actual = gameReducer(currentState, action)
    expect(actual).toEqual(expected)
  })

  it('startGame action sets isRunning to true', () => {
    const currentState = {
      matrix: [[false, false, false], [false, false, false], [false, false, false]],
      size: 3,
      selected: '',
      isRunning: false,
      speed: 1
    }

    const action = {
      type: 'START_GAME'
    }
    const expected = {
      matrix: [[false, false, false], [false, false, false], [false, false, false]],
      size: 3,
      selected: '',
      isRunning: true,
      speed: 1
    }
    const actual = gameReducer(currentState, action)
    expect(actual).toEqual(expected)
  })

  it('stopGame action sets isRunning to false', () => {
    const currentState = {
      matrix: [[false, false, false], [false, false, false], [false, false, false]],
      size: 3,
      selected: '',
      isRunning: false,
      speed: 1
    }

    const action = {
      type: 'STOP_GAME'
    }
    const expected = {
      matrix: [[false, false, false], [false, false, false], [false, false, false]],
      size: 3,
      selected: '',
      isRunning: false,
      speed: 1
    }
    const actual = gameReducer(currentState, action)
    expect(actual).toEqual(expected)
  })

  it('setSeletedType action sets pattern to selected type', () => {
    const currentState = {
      matrix: [[false, false, false], [false, false, false], [false, false, false]],
      size: 3,
      selected: '',
      isRunning: false,
      speed: 1
    }

    const type = 'Glider'
    const action = {
      type: 'SET_SELECTED_TYPE',
      payload: type
    }
    const expected = {
      matrix: [[false, false, false], [false, false, false], [false, false, false]],
      size: 3,
      selected: 'Glider',
      isRunning: false,
      speed: 1
    }
    const actual = gameReducer(currentState, action)
    expect(actual).toEqual(expected)
  })

  it('setSpeed action sets speed to specific speed', () => {
    const currentState = {
      matrix: [[false, false, false], [false, false, false], [false, false, false]],
      size: 3,
      selected: '',
      isRunning: false,
      speed: 1
    }

    const speed = 5
    const action = {
      type: 'SET_SPEED',
      payload: speed
    }
    const expected = {
      matrix: [[false, false, false], [false, false, false], [false, false, false]],
      size: 3,
      selected: '',
      isRunning: false,
      speed: 5
    }
    const actual = gameReducer(currentState, action)
    expect(actual).toEqual(expected)
  })
})
