import React from 'react'
import { nextCellState } from '../nextCellState'
import { countAliveNeighbours } from '../countAliveNeighbours'
import Cell from './Cell'
import Grid from './Grid'
import 'react-dropdown/style.css'
import { Button, DropdownType, Input, Speed, CellStyle } from '../style/gameOfLive-styles'
import createMatrix from '../utility'
import { newBoard, startGame, stopGame, setSelectedType, setSpeed } from '../redux/action'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'
import cloneDeep from 'lodash/cloneDeep'

const options = [
  'Glider', 'Small-Exploder', 'Exploder', '10-Cell-Row', 'Lightweight-spaceship', 'Tumbler'
]
class GameBody extends React.Component {
  constructor () {
    super()
    this.speedChange = debounce(this.speedChange, 300)
  }

  handleCellClick = (index) => {
    const { size, matrix, dispatch } = this.props
    const x = Math.floor(index / size)
    const y = index % size
    const board = cloneDeep(matrix)
    board[x][y] = !board[x][y]
    dispatch(newBoard(board))
  }

  handleNext = () => {
    const { matrix, dispatch } = this.props
    const nextBoard = cloneDeep(matrix)
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const allAliveNeighbours = countAliveNeighbours(i, j, matrix)
        nextBoard[i][j] = nextCellState(matrix[i][j], allAliveNeighbours)
      }
    }
    dispatch(newBoard(nextBoard))
  }

  handleStartStop = () => {
    const { speed, dispatch, isRunning } = this.props
    if (!isRunning) {
      dispatch(startGame())

      this.intervalID = setInterval(
        () => this.handleNext(),
        speed * 1000
      )
    } else {
      dispatch(stopGame())
      clearInterval(this.intervalID)
    }
  }

  clearBoard = () => {
    const { matrix, dispatch } = this.props
    const nextBoard = createMatrix(matrix.length)
    dispatch(newBoard(nextBoard))
  }

  gliderGame = () => {
    const board = createMatrix(40)
    const points = [[20, 23], [21, 24], [22, 22], [22, 23], [22, 24]]
    points.forEach(([x, y]) => board[x][y] = true)
    this.props.dispatch(newBoard(board))
  }

  smallExploder = () => {
    const board = createMatrix(40)
    const points = [[18, 18], [19, 17], [19, 18], [19, 19], [20, 17], [20, 19], [21, 18]]
    points.forEach(([x, y]) => board[x][y] = true)
    this.props.dispatch(newBoard(board))
  }

  exploder = () => {
    const board = createMatrix(40)
    const points = [[17, 17], [17, 19], [17, 21], [18, 17], [18, 21], [19, 17], [19, 21], [20, 17], [20, 21], [21, 17], [21, 19], [21, 21]]
    points.forEach(([x, y]) => board[x][y] = true)
    this.props.dispatch(newBoard(board))
  }

  tenCellRow = () => {
    const board = createMatrix(40)
    const points = [[15, 15], [15, 16], [15, 17], [15, 18], [15, 19], [15, 20], [15, 21], [15, 22], [15, 23], [15, 24]]
    points.forEach(([x, y]) => board[x][y] = true)
    this.props.dispatch(newBoard(board))
  }

  lightweight = () => {
    const board = createMatrix(40)
    const points = [[17, 17], [17, 18], [17, 19], [17, 20], [18, 16], [18, 20], [19, 20], [20, 16], [20, 19]]
    points.forEach(([x, y]) => board[x][y] = true)
    this.props.dispatch(newBoard(board))
  }

  tumbler = () => {
    const board = createMatrix(40)
    const points = [
      [15, 16], [15, 17], [15, 19], [15, 20],
      [16, 16], [16, 17], [16, 19], [16, 20],
      [17, 17], [17, 19],
      [18, 15], [18, 17], [18, 19], [18, 21],
      [19, 15], [19, 17], [19, 19], [19, 21],
      [20, 15], [20, 16], [20, 20], [20, 21]]
    points.forEach(([x, y]) => board[x][y] = true)
    this.props.dispatch(newBoard(board))
  }

  changeHandle = (e) => {
    this.props.dispatch(setSelectedType(e.value))
    switch (e.value) {
      case 'Glider':
        this.gliderGame()
        break
      case 'Small-Exploder':
        this.smallExploder()
        break
      case 'Exploder':
        this.exploder()
        break
      case '10-Cell-Row':
        this.tenCellRow()
        break
      case 'Lightweight-spaceship':
        this.lightweight()
        break
      case 'Tumbler':
        this.tumbler()
        break
      default:
    }
  }

  speedChange = (value) => {
    this.props.dispatch(setSpeed(value))
    clearInterval(this.intervalID)
    this.intervalID = setInterval(
      () => this.handleNext(),
      1000 / this.props.speed
    )
  }

  render () {
    const { size, matrix, selected, speed, isRunning } = this.props
    let columns = ''
    for (let i = 0; i < size; i++) {
      columns += 'auto '
    }
    return (
      <>
        <Grid gap="0" columns={columns}>
          {matrix
            .reduce((acc, item) => acc.concat(item), [])
            .map((item, index) => (
              <CellStyle
                onClick={() => this.handleCellClick(index)}
                key={index}
                value={item}
              >
                {' '}
              </CellStyle>
            ))}
        </Grid>
        <Grid >
          <Cell>
            <DropdownType className="" options={options} onChange={this.changeHandle} value={selected} />
          </Cell>
          <Cell>
            <Button onClick={this.handleNext}>Next</Button>
          </Cell>
          <Cell>
            {isRunning ? <Button onClick={this.handleStartStop}>Stop</Button> : <Button onClick={this.handleStartStop}>Start</Button>}
          </Cell>
          <Cell>
            <Button onClick={this.clearBoard}>Clear</Button>
          </Cell>
          <Cell>
            <Speed>Speed:</Speed>
          </Cell>
          <Cell>
            <Input id="speed" type="range" min="1" max="10" step="1" value={speed} onChange={e => this.speedChange(e.target.value)} title="speed dial"/>
          </Cell>
        </Grid>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    matrix: state.matrix,
    size: state.size,
    selected: state.selected,
    isRunning: state.isRunning,
    speed: state.speed
  }
}
export default connect(mapStateToProps)(GameBody)
