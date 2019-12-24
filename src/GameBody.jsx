import React from "react";
import { CellStyle } from "./style/board-styles";
import { nextCellState } from "./nextCellState";
import { countAliveNeighbours } from "./countAliveNeighbours";
import GameRulesAndDes from './GameRulesAndDescription'
import GameText from './GameText'
import Cell from './Cell';
import Grid from './Grid'
import 'react-dropdown/style.css'
import {Button, DropdownType, Input} from './style/gameOfLive-styles'

const options = [
  'Glider', 'Small-Exploder', 'Exploder', '10-Cell-Row', 'Lightweight-spaceship', 'Tumbler', 'Gosper-Glider Gun'
]
class GameBody extends React.Component {
  render(){
    return (
      <>
      <Grid gap="0" columns={this.props.columns}>
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
          </>
    )
  }
}

export default GameBody
