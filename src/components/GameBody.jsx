import React from "react";
import { nextCellState } from "../nextCellState";
import { countAliveNeighbours } from "../countAliveNeighbours";
import Cell from './Cell';
import Grid from './Grid'
import 'react-dropdown/style.css'
import {Button, DropdownType, Input, Speed, CellStyle} from '../style/gameOfLive-styles'
import createMatrix from '../utility'
import {newBoard, setStartOrStop, setSelectedType, setSpeed} from '../redux/action'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'

const options = [
  'Glider', 'Small-Exploder', 'Exploder', '10-Cell-Row', 'Lightweight-spaceship', 'Tumbler'
]
class GameBody extends React.Component {
    constructor() {
    super();
    this.speedChange = debounce(this.speedChange, 300);
  }

  handleCellClick = (index) => {
    const { size, matrix } = this.props;
    const x = Math.floor(index / size);
    const y = index % size;
    const board = createMatrix(size);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === x && j === y) {
          board[i][j] = !matrix[i][j];
        } else {
          board[i][j] = matrix[i][j];
        }
      }
    }
    this.props.dispatch(newBoard(board))
  }

  handleNext = () =>{
    const { matrix } = this.props;

    const nextBoard = createMatrix(matrix.length);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const allAliveNeighbours = countAliveNeighbours(i, j, matrix);
        nextBoard[i][j] = nextCellState(matrix[i][j], allAliveNeighbours);
      }
    }
    this.props.dispatch(newBoard(nextBoard))
  }

  handleStart = () =>{
    const status = this.props.startOrStop
    if(status === 'Start'){
      this.props.dispatch(setStartOrStop('Stop'))

      this.intervalID = setInterval(
        () => this.handleNext(),
        this.props.speed * 1000
      )
    }else if(status === 'Stop'){
      this.props.dispatch(setStartOrStop('Start'))
      clearInterval(this.intervalID)
    }
  }

  clearBoard = () => {
    const { matrix } = this.props;
    const nextBoard = createMatrix(matrix.length);
    this.props.dispatch(newBoard(nextBoard))
  }

  gliderGame = () =>{
    const matrix = createMatrix(40)
    const board = createMatrix(40);
    board[20][23] = !matrix[20][23]
    board[21][24] = !matrix[21][24]
    board[22][22] = !matrix[22][22]
    board[22][23] = !matrix[22][23]
    board[22][24] = !matrix[22][24]
    this.props.dispatch(newBoard(board))
  }

  smallExploder = () => {
    const matrix = createMatrix(40)
    const board = createMatrix(40);
    board[18][18] = !matrix[18][18]
    board[19][17] = !matrix[19][17]
    board[19][18] = !matrix[19][18]
    board[19][19] = !matrix[19][19]
    board[20][17] = !matrix[20][17]
    board[20][19] = !matrix[20][19]
    board[21][18] = !matrix[21][18]

    this.props.dispatch(newBoard(board))
  }

  exploder = () =>{
    const matrix = createMatrix(40)
    const board = createMatrix(40);
    board[17][17] = !matrix[17][17]
    board[17][19] = !matrix[17][19]
    board[17][21] = !matrix[17][21]
    board[18][17] = !matrix[18][17]
    board[18][21] = !matrix[18][21]
    board[19][17] = !matrix[19][17]
    board[19][21] = !matrix[19][21]
    board[20][17] = !matrix[20][17]
    board[20][21] = !matrix[20][21]
    board[21][17] = !matrix[21][17]
    board[21][19] = !matrix[21][19]
    board[21][21] = !matrix[21][21]
  
    this.props.dispatch(newBoard(board))
  }

  tenCellRow = () =>{
    const matrix = createMatrix(40)
    const board = createMatrix(40);
    board[15][15] = !matrix[15][15]
    board[15][16] = !matrix[15][16]
    board[15][17] = !matrix[15][17]
    board[15][18] = !matrix[15][18]
    board[15][19] = !matrix[15][19]
    board[15][20] = !matrix[15][20]
    board[15][21] = !matrix[15][21]
    board[15][22] = !matrix[15][22]
    board[15][23] = !matrix[15][23]
    board[15][24] = !matrix[15][24]
  
    this.props.dispatch(newBoard(board))
  }

  lightweight = () => {
    const matrix = createMatrix(40)

    const board = createMatrix(40);
    board[17][17] = !matrix[17][17]
    board[17][18] = !matrix[17][18]
    board[17][19] = !matrix[17][19]
    board[17][20] = !matrix[17][20]
    board[18][16] = !matrix[18][16]
    board[18][20] = !matrix[18][20]
    board[19][20] = !matrix[19][20]
    board[20][16] = !matrix[20][16]
    board[20][19] = !matrix[20][19]
  
    this.props.dispatch(newBoard(board))
  }


  tumbler = () =>{ 
    const matrix = createMatrix(40)

    const board = createMatrix(40);
    board[15][16] = !matrix[15][16]
    board[15][17] = !matrix[15][17]
    board[15][19] = !matrix[15][19]
    board[15][20] = !matrix[15][20]
    board[16][16] = !matrix[16][16]
    board[16][17] = !matrix[16][17]
    board[16][19] = !matrix[16][19]
    board[16][20] = !matrix[16][20]
    board[17][17] = !matrix[17][17]
    board[17][19] = !matrix[17][19]
    board[18][15] = !matrix[18][15]
    board[18][17] = !matrix[18][17]
    board[18][19] = !matrix[18][19]
    board[18][21] = !matrix[18][21]
    board[19][15] = !matrix[19][15]
    board[19][17] = !matrix[19][17]
    board[19][19] = !matrix[19][19]
    board[19][21] = !matrix[19][21]
    board[20][15] = !matrix[20][16]
    board[20][16] = !matrix[20][16]
    board[20][20] = !matrix[20][20]
    board[20][21] = !matrix[20][21]
  
    this.props.dispatch(newBoard(board))
  }
  changeHandle = (e) => {
    this.props.dispatch(setSelectedType(e.value))
    switch(e.value){
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
        return    
    }
  }

  speedChange = (value) =>{
    this.props.dispatch(setSpeed(value))
    clearInterval(this.intervalID)
    this.intervalID = setInterval(
      () => this.handleNext(),
      1000 / this.props.speed
    )
  }

  render(){
    let columns = "";
    for (let i = 0; i < this.props.size; i++) {
      columns += "auto ";
    }
    return (
      <>
      <Grid gap="0" columns={columns}>
            {this.props.matrix
              .reduce((acc, item) => acc.concat(item), [])
              .map((item, index) => (
                <CellStyle
                  onClick={() => this.handleCellClick(index)}
                  key={index}
                  value={item}
                >
                  {" "}
                </CellStyle>
              ))}
          </Grid>
          <Grid >   
            <Cell>    
            <DropdownType className="" options={options} onChange={this.changeHandle} value={this.props.selected} />
            </Cell>
            <Cell> 
            <Button onClick={this.handleNext}>Next</Button>
            </Cell>
            <Cell> 
            <Button onClick={this.handleStart}>{this.props.startOrStop}</Button>
            </Cell>
            <Cell> 
            <Button onClick={this.clearBoard}>Clear</Button>
            </Cell>
            <Cell> 
             <Speed>Speed:</Speed>
            </Cell>
            <Cell> 
            <Input id="speed" type="range" min="1" max="10" step="1" value={this.props.speed} onChange={e => this.speedChange(e.target.value)}  title="speed dial"/>
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
    startOrStop: state.startOrStop,
    speed: state.speed
  }
}
export default connect(mapStateToProps)(GameBody)
