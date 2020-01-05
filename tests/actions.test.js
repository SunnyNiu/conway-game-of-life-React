import {
  newBoard,
  startGame,
  stopGame,
  setSelectedType,
  setSpeed
} from '../src/redux/action'

describe('action tests', () => {
  it('newBoard returns expected board object', () => {
    const board = [[false], [false], [false], [false], [false]]
    const expected = {
      type: 'SET_NEW_BOARD',
      payload: board
    }

    const actual = newBoard(board)
    expect(actual).toEqual(expected)
  })

  it('startGame returns expected object', () => {
    const expected = {
      type: 'START_GAME'
    }

    const actual = startGame()
    expect(actual).toEqual(expected)
  })

  it('stopGame returns expected object', () => {
    const expected = {
      type: 'STOP_GAME'
    }

    const actual = stopGame()
    expect(actual).toEqual(expected)
  })

  it('setSeletedPattern returns expected object', () => {
    const type = 'Small-Exploder'
    const expected = {
      type: 'SET_SELECTED_TYPE',
      payload: type
    }

    const actual = setSelectedType(type)
    expect(actual).toEqual(expected)
  })

  it('setSpeed returns expected object', () => {
    const speed = 4
    const expected = {
      type: 'SET_SPEED',
      payload: speed
    }

    const actual = setSpeed(speed)
    expect(actual).toEqual(expected)
  })
})
