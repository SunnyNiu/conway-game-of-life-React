import React from 'react'
import { nextCellState } from '../nextCellState'
import { countAliveNeighbours } from '../countAliveNeighbours'
import Cell from './Cell'
import Grid from './Grid'
import { Button, DropdownType, Input, Speed, CellStyle } from '../style/gameOfLive-styles'
import createMatrix from '../utility'
import { newBoard, startGame, stopGame, setSelectedType, setSpeed } from '../redux/action'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'
import cloneDeep from 'lodash/cloneDeep'
import { gliderGameBoard, smallExploderBoard, exploderBoard, tenCellRowBoard, lightweightBoard, tumblerBoard } from './patterns'

const options = [
  'Glider', 'Small-Exploder', 'Exploder', '10-Cell-Row', 'LightweightSpaceship', 'Tumbler'
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
    this.props.dispatch(newBoard(gliderGameBoard()))
  }

  smallExploder = () => {
    this.props.dispatch(newBoard(smallExploderBoard()))
  }

  exploder = () => {
    this.props.dispatch(newBoard(exploderBoard()))
  }

  tenCellRow = () => {
    this.props.dispatch(newBoard(tenCellRowBoard()))
  }

  lightweight = () => {
    this.props.dispatch(newBoard(lightweightBoard()))
  }

  tumbler = () => {
    this.props.dispatch(newBoard(tumblerBoard()))
  }

  HandlePattern = (e) => {
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
      case 'LightweightSpaceship':
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
          <Cell width ={3}>
            <DropdownType className="" options={options} onChange={this.HandlePattern} value={selected} />
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
