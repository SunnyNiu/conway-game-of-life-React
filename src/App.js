import React from "react";
import "./App.css";
import { BoardStyle, CellStyle } from "./board-styles";
import { nextCellState } from "./nextCellState";
import { countAliveNeighbours } from "./countAliveNeighbours";

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

    return (
      <div className="App">
        <header className="App-header">
          <BoardStyle columns={columns}>
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
          </BoardStyle>
          <div>
            <button onClick={this.handleNext}>Next</button>
            <button onClick={this.clearBoard}>Clear</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
