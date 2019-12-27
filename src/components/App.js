import React from 'react'
import GameRulesAndDes from './GameRulesAndDescription'
import GameText from './GameText'
import Cell from './Cell'
import Grid from './Grid'
import GameBody from './GameBody'

class App extends React.Component {
  render () {
    return (
      <Grid
        columns ="10vw 1fr 10vw"
        rows= {'minmax(45px, auto) 1fr minmax(45px, auto)'}
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
        <Cell></Cell>
        <Cell width={3}>
        </Cell>
      </Grid>
    )
  }
}

export default App
