import React from "react";
import { CellStyle } from "./style/board-styles";
import { nextCellState } from "./nextCellState";
import { countAliveNeighbours } from "./countAliveNeighbours";
import GameRulesAndDes from './GameRulesAndDescription'
import GameText from './GameText'
import Cell from './Cell';
import Grid from './Grid'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import {Button} from './style/gameOfLive-styles'

const options = [
  'clear', 'Glider', 'small Exploder', 'Exploder', '10 Cell Row', 'Lightweight spaceship', 'Tumbler', 'Gosper Glider Gun'
]
class App extends React.Component {
  constructor() {
    super();

    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.createMatrix = this.createMatrix.bind(this);
    this.state = {
      matrix: this.createMatrix(40),
      size: 40
    };
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

      this.setState({
        matrix: nextBoard
      });
    }
  }

  clearBoard() {
    const { matrix } = this.state;
    const nextBoard = this.createMatrix(matrix.length);
    this.setState({
      matrix: nextBoard
    });
  }
  render() {
    let columns = "";
    for (let i = 0; i < this.state.size; i++) {
      columns += "auto ";
    }
    const defaultOption = options[0]
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
          <div>
         
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            <Button onClick={this.handleNext}>Next</Button>
            <Button onClick={this.clearBoard}>Clear</Button>
            <label>Speed</label>
            <input id="speed" type="range" min="10" max="500" step="49" value="10" title="speed dial"></input>
            <label>Zoom Out/In</label>
            <input id="size" type="range" min="2" max="11" value="2" title="grid size"></input>
          </div>
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
