import React from 'react'
import { Title, Paragraph, BorderParagraph } from '../style/gameOfLive-styles'

class GameRulesAndDes extends React.Component {
  render () {
    return (
      <>
        <Title>The Rules</Title>
        <BorderParagraph>For a space that is 'populated':</BorderParagraph>
        <Paragraph>
          &nbsp;Each cell with one or no neighbors dies, as if by solitude.
        </Paragraph>
        <Paragraph>
          &nbsp;Each cell with four or more neighbors dies, as if by overpopulation.
        </Paragraph>
        <Paragraph>
          &nbsp;Each cell with two or three neighbors survives.
        </Paragraph>

        <BorderParagraph>For a space that is 'empty' or 'unpopulated'</BorderParagraph>
        <Paragraph>
          &nbsp;Each cell with three neighbors becomes populated.
        </Paragraph>

        <Title>The Controls</Title>
        <Paragraph>
          Choose a figure from the pull-down menu or make one yourself by clicking on the cells with a mouse.
          A new generation of cells (corresponding to one iteration of the rules) is initiated by the 'Next'
           button. The 'Start' button advances the game by several generations. Game speed is regulated by the speed dial.
        </Paragraph>
        <Title>Development</Title>
        <Paragraph>Developer: Sunny Niu. Just for learning and demo, which is resemble <a href='https://bitstorm.org/gameoflife/'>https://bitstorm.org/gameoflife/</a></Paragraph>
      </>
    )
  }
}

export default GameRulesAndDes
