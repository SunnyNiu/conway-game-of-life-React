import React from "react";
import { CellStyle } from "./style/board-styles";
import { nextCellState } from "./nextCellState";
import { countAliveNeighbours } from "./countAliveNeighbours";
import GameRulesAndDes from './GameRulesAndDescription'
import GameText from './GameText'
import Cell from './Cell';
import Grid from './Grid'
import debounce from 'lodash/debounce'
import 'react-dropdown/style.css'
import {Button, DropdownType, Input} from './style/gameOfLive-styles'
import GameBody from './GameBody'
import {newBoard, setStartOrStop, setSelectedType, setSpeed} from './redux/action'
import createMatrix from './utility'
import { connect } from 'react-redux'

const options = [
  'Glider', 'Small-Exploder', 'Exploder', '10-Cell-Row', 'Lightweight-spaceship', 'Tumbler', 'Gosper-Glider Gun'
]
class App extends React.Component {
  constructor() {
    super();

    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    // this.createMatrix = this.createMatrix.bind(this);
    this.changeHandle = this.changeHandle.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.speedChange = debounce(this.speedChange, 300);
    // this.state = {
    //   matrix: this.createMatrix(40),
    //   size: 40,
    //   selected: '',
    //   startOrStop: 'Start',
    //   speed: 1
    // };
  }

  componentWillUnmount () {
    clearInterval(this.intervalID)
  }

  handleCellClick(index) {
    const { size, matrix } = this.props;
    const x = Math.floor(index / size);
    const y = index % size;
    const newBoard = this.createMatrix(size);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === x && j === y) {
          newBoard[i][j] = !matrix[i][j];
        } else {
          newBoard[i][j] = matrix[i][j];
        }
      }
    }
    this.props.dispatch(newBoard(newBoard))
  }

  handleNext() {
    const { matrix } = this.props;

    const nextBoard = this.createMatrix(matrix.length);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const allAliveNeighbours = countAliveNeighbours(i, j, matrix);
        nextBoard[i][j] = nextCellState(matrix[i][j], allAliveNeighbours);
      }
    }
    this.props.dispatch(newBoard(newBoard))
  }

  handleStart(){
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

  clearBoard() {
    const { matrix } = this.props;
    const nextBoard = createMatrix(matrix.length);
    this.props.dispatch(newBoard(nextBoard))
  }

  gliderGame(){
    const matrix = createMatrix(40)
    const [x1, y1] = [20, 23] 
    const [x2, y2] = [21, 24]
    const [x3, y3] = [22, 22]
    const [x4, y4] = [22, 23]
    const [x5, y5] = [22, 24]
    const newBoard = createMatrix(40);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if ((i === x1 && j === y1) || (i === x2 && j === y2) || (i === x3 && j === y3) || (i === x4 && j === y4) || (i === x5 && j === y5)) {
          newBoard[i][j] = !matrix[i][j];
        } else {
          newBoard[i][j] = matrix[i][j];
        }
      }
    }
    this.props.dispatch(newBoard(newBoard))
  }

  smallExploder(){
    const matrix = createMatrix(40)

    const [x1, y1] = [18, 18] 
    const [x2, y2] = [19, 17]
    const [x3, y3] = [19, 18]
    const [x4, y4] = [19, 19]
    const [x5, y5] = [20, 17]
    const [x6, y6] = [20, 19]
    const [x7, y7] = [21, 18]
    const newBoard = createMatrix(40);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if ((i === x1 && j === y1) || 
        (i === x2 && j === y2) || 
        (i === x3 && j === y3) || 
        (i === x4 && j === y4) || 
        (i === x5 && j === y5) ||
        (i === x6 && j === y6) ||
        (i === x7 && j === y7) ) {
          newBoard[i][j] = !matrix[i][j];
        } else {
          newBoard[i][j] = matrix[i][j];
        }
      }
    }
    this.props.dispatch(newBoard(newBoard))
  }

  exploder(){
    const matrix = this.createMatrix(40)
    const [x1, y1] = [17, 17] 
    const [x2, y2] = [17, 19]
    const [x3, y3] = [17, 21]
    const [x4, y4] = [18, 17]
    const [x5, y5] = [18, 21]
    const [x6, y6] = [19, 17]
    const [x7, y7] = [19, 21]
    const [x8, y8] = [20, 17]
    const [x9, y9] = [20, 21]
    const [x10, y10] = [21, 17]
    const [x11, y11] = [21, 19]
    const [x12, y12] = [21, 21]
    const newBoard = createMatrix(40);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if ((i === x1 && j === y1) || 
        (i === x2 && j === y2) || 
        (i === x3 && j === y3) || 
        (i === x4 && j === y4) || 
        (i === x5 && j === y5) ||
        (i === x6 && j === y6) ||
        (i === x7 && j === y7) ||
        (i === x8 && j === y8) ||
        (i === x9 && j === y9) ||
        (i === x10 && j === y10) ||
        (i === x11 && j === y11) ||
        (i === x12 && j === y12) ) {
          newBoard[i][j] = !matrix[i][j];
        } else {
          newBoard[i][j] = matrix[i][j];
        }
      }
    }
    this.props.dispatch(newBoard(newBoard))
  }

  tenCellRow(){
    const matrix = createMatrix(40)
    const [x1, y1] = [15, 15] 
    const [x2, y2] = [15, 16]
    const [x3, y3] = [15, 17]
    const [x4, y4] = [15, 18]
    const [x5, y5] = [15, 19]
    const [x6, y6] = [15, 20]
    const [x7, y7] = [15, 21]
    const [x8, y8] = [15, 22]
    const [x9, y9] = [15, 23]
    const [x10, y10] = [15, 24]
    const newBoard = createMatrix(40);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if ((i === x1 && j === y1) || 
        (i === x2 && j === y2) || 
        (i === x3 && j === y3) || 
        (i === x4 && j === y4) || 
        (i === x5 && j === y5) ||
        (i === x6 && j === y6) ||
        (i === x7 && j === y7) ||
        (i === x8 && j === y8) ||
        (i === x9 && j === y9) ||
        (i === x10 && j === y10) ) {
          newBoard[i][j] = !matrix[i][j];
        } else {
          newBoard[i][j] = matrix[i][j];
        }
      }
    }
    this.props.dispatch(newBoard(newBoard))
  }

  lightweight(){
    const matrix = createMatrix(40)
    const [x1, y1] = [17, 17] 
    const [x2, y2] = [17, 18]
    const [x3, y3] = [17, 19]
    const [x4, y4] = [17, 20]
    const [x5, y5] = [18, 16]
    const [x6, y6] = [18, 20]
    const [x7, y7] = [19, 20]
    const [x8, y8] = [20, 16]
    const [x9, y9] = [20, 19]
    const newBoard = this.createMatrix(40);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if ((i === x1 && j === y1) || 
        (i === x2 && j === y2) || 
        (i === x3 && j === y3) || 
        (i === x4 && j === y4) || 
        (i === x5 && j === y5) ||
        (i === x6 && j === y6) ||
        (i === x7 && j === y7) ||
        (i === x8 && j === y8) ||
        (i === x9 && j === y9) ) {
          newBoard[i][j] = !matrix[i][j];
        } else {
          newBoard[i][j] = matrix[i][j];
        }
      }
    }
    this.props.dispatch(newBoard(newBoard))
  }


  tumbler(){ 
    const matrix = this.createMatrix(40)
    const [x1, y1] = [15, 16] 
    const [x2, y2] = [15, 17]
    const [x3, y3] = [15, 19]
    const [x4, y4] = [15, 20]
    const [x5, y5] = [16, 16]
    const [x6, y6] = [16, 17]
    const [x7, y7] = [16, 19]
    const [x8, y8] = [16, 20]
    const [x9, y9] = [17, 17]
    const [x10, y10] = [17, 19] 
    const [x11, y11] = [18, 15]
    const [x12, y12] = [18, 17]
    const [x13, y13] = [18, 19]
    const [x14, y14] = [18, 21]
    const [x15, y15] = [19, 15]
    const [x16, y16] = [19, 17]
    const [x17, y17] = [19, 19]
    const [x18, y18] = [19, 21]
    const [x19, y19] = [20, 15]
    const [x20, y20] = [20, 16]
    const [x21, y21] = [20, 20]
    const [x22, y22] = [20, 21]
    const newBoard = this.createMatrix(40);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if ((i === x1 && j === y1) || 
        (i === x2 && j === y2) || 
        (i === x3 && j === y3) || 
        (i === x4 && j === y4) || 
        (i === x5 && j === y5) ||
        (i === x6 && j === y6) ||
        (i === x7 && j === y7) ||
        (i === x8 && j === y8) ||
        (i === x9 && j === y9) ||
        (i === x10 && j === y10) ||
        (i === x11 && j === y11) ||
        (i === x12 && j === y12) ||
        (i === x13 && j === y13) ||
        (i === x14 && j === y14) ||
        (i === x15 && j === y15) ||
        (i === x16 && j === y16) ||
        (i === x17 && j === y17) ||
        (i === x18 && j === y18) ||
        (i === x19 && j === y19) ||
        (i === x20 && j === y20) ||
        (i === x21 && j === y21) ||
        (i === x22 && j === y22)) {
          newBoard[i][j] = !matrix[i][j];
        } else {
          newBoard[i][j] = matrix[i][j];
        }
      }
    }
    this.props.dispatch(newBoard(newBoard))
  }
  changeHandle(e){
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

  speedChange(value){
    this.props.dispatch(setSpeed(value))
    clearInterval(this.intervalID)
    this.intervalID = setInterval(
      () => this.handleNext(),
      1000 / this.props.speed
    )
  }

  render() {
    let columns = "";
    for (let i = 0; i < this.props.size; i++) {
      columns += "auto ";
    }
    // const defaultOption = options[0]
    return (
      <Grid
      columns ="100px 1fr 100px"
      rows= {"minmax(45px, auto) 1fr minmax(45px, auto)"}
      >
        <Cell width ={3} center>
        <h1>The Game of Life</h1>
        </Cell>
        <Cell></Cell>
        <Cell center>
          <GameText></GameText>
          {/* <GameBody column={columns} matrix={this.state.matrix}> </GameBody> */}
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
          <Grid columns="100px 70px 70px 50px 130px 90px 130px 1fr">   
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
             Speed
            </Cell>
            <Cell> 
            <Input id="speed" type="range" min="1" max="10" step="1" value={this.props.speed} onChange={e => this.speedChange(e.target.value)}  title="speed dial"/>
            </Cell>
          </Grid>
          <GameRulesAndDes/>
        </Cell>
        <Cell>{"    "}</Cell>
        <Cell width={3}>
          </Cell>  
      </Grid>
    );
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

export default connect(mapStateToProps, null)(App);
