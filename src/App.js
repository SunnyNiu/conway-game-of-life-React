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

  componentWillUnmount () {
    clearInterval(this.intervalID)
  }

  render() {

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
          <GameText/>
          <GameBody/> 
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
