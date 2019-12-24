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
import {Button, DropdownType, Input, Label} from './style/gameOfLive-styles'

const options = [
  'Glider', 'Small-Exploder', 'Exploder', '10-Cell-Row', 'Lightweight-spaceship', 'Tumbler', 'Gosper-Glider Gun'
]
class App extends React.Component {
  constructor() {
    super();

    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.createMatrix = this.createMatrix.bind(this);
    this.changeHandle = this.changeHandle.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.speedChange = debounce(this.speedChange, 300);
    this.state = {
      matrix: this.createMatrix(40),
      size: 40,
      selected: '',
      startOrStop: 'Start',
      speed: 1
    };
  }

  componentWillUnmount () {
    clearInterval(this.intervalID)
  }

  createMatrix(size) {
    const matrix = [];
    for (let i = 0; i < size; i++) {
      const arr = [];
      for (let j = 0; j < size; j++) {
        arr.push(false);
      }
      matrix.push(arr);
    }
    return matrix;
  }

  handleCellClick(index) {
    const { size, matrix } = this.state;
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
    this.setState({
      matrix: newBoard
    });
  }

  handleNext() {
    const { matrix } = this.state;

    const nextBoard = this.createMatrix(matrix.length);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const allAliveNeighbours = countAliveNeighbours(i, j, matrix);
        nextBoard[i][j] = nextCellState(matrix[i][j], allAliveNeighbours);
      }
    }
    this.setState({
      matrix: nextBoard
    });
  }

  handleStart(){
    const status = this.state.startOrStop
    if(status === 'Start'){
      this.setState({
        startOrStop: 'Stop'
      })

      this.intervalID = setInterval(
        () => this.handleNext(),
        this.state.speed * 1000
      )
    }else if(status === 'Stop'){
      this.setState({
        startOrStop: 'Start'
      })
      clearInterval(this.intervalID)
    }
  }

  clearBoard() {
    const { matrix } = this.state;
    const nextBoard = this.createMatrix(matrix.length);
    this.setState({
      matrix: nextBoard
    });
  }

  gliderGame(){
    const matrix = this.createMatrix(40)
    const size = this.state.size
    const [x1, y1] = [20, 23] 
    const [x2, y2] = [21, 24]
    const [x3, y3] = [22, 22]
    const [x4, y4] = [22, 23]
    const [x5, y5] = [22, 24]
    const newBoard = this.createMatrix(size);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if ((i === x1 && j === y1) || (i === x2 && j === y2) || (i === x3 && j === y3) || (i === x4 && j === y4) || (i === x5 && j === y5)) {
          newBoard[i][j] = !matrix[i][j];
        } else {
          newBoard[i][j] = matrix[i][j];
        }
      }
    }
    this.setState({
      matrix: newBoard
    });
  }

  smallExploder(){
    const matrix = this.createMatrix(40)
    const size = this.state.size
    const [x1, y1] = [18, 18] 
    const [x2, y2] = [19, 17]
    const [x3, y3] = [19, 18]
    const [x4, y4] = [19, 19]
    const [x5, y5] = [20, 17]
    const [x6, y6] = [20, 19]
    const [x7, y7] = [21, 18]
    const newBoard = this.createMatrix(size);
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
    this.setState({
      matrix: newBoard
    });
  }

  exploder(){
    const matrix = this.createMatrix(40)
    const size = this.state.size
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
    const newBoard = this.createMatrix(size);
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
    this.setState({
      matrix: newBoard
    });
  }

  tenCellRow(){
    const matrix = this.createMatrix(40)
    const size = this.state.size
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
    const newBoard = this.createMatrix(size);
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
    this.setState({
      matrix: newBoard
    });
  }
  changeHandle(e){
    this.setState({
      selected: e.value
    })
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
      default:
        return    
    }
  }

  speedChange(value){
    this.setState({
      speed: value
    })
    clearInterval(this.intervalID)
    this.intervalID = setInterval(
      () => this.handleNext(),
      1000 / this.state.speed
    )
  }

  render() {
    let columns = "";
    for (let i = 0; i < this.state.size; i++) {
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
          <Grid gap="0" columns={columns}>
            {this.state.matrix
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
            <DropdownType className="" options={options} onChange={this.changeHandle} value={this.state.selected} />
            </Cell>
            <Cell> 
            <Button onClick={this.handleNext}>Next</Button>
            </Cell>
            <Cell> 
            <Button onClick={this.handleStart}>{this.state.startOrStop}</Button>
            </Cell>
            <Cell> 
            <Button onClick={this.clearBoard}>Clear</Button>
            </Cell>
            <Cell> 
             Speed
            </Cell>
            <Cell> 
            <Input id="speed" type="range" min="1" max="10" step="1" value={this.state.speed} onChange={e => this.speedChange(e.target.value)}  title="speed dial"/>
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

export default App;
