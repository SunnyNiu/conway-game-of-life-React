import styled from 'styled-components'
import Dropdown from 'react-dropdown'

export const CellStyle = styled.div`
  background-color: ${props => (props.value ? 'green' : 'pink')};
  border: 1px solid rgba(0, 0, 0, 0.8);
  text-align: center;
`

export const GameTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`

export const Title = styled.h2`
  text-align: left;
  color: palevioletred;
  background-color: #ffffff;
`

export const Paragraph = styled.p`
  text-align: left;
  color: palevioletred;
  background-color: #ffffff;
`

export const BorderParagraph = styled(Paragraph)`
  font-weight: bold;
`

export const Button = styled.button`
  display: inline;
  color: palevioletred;
  font-size: 0.5em;
  border-radius: 3px;
`

export const Speed = styled.button`
  display: inline;
  color: palevioletred;
  font-size: 0.5em;
  border: none;
`

export const DropdownType = styled(Dropdown)`
    position: relative;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    color: palevioletred;
    cursor: default;
    outline: none;
    transition: all 200ms ease;
    text-align: left;
    display: block;
    margin: 0.5em;
`
export const Input = styled.input`
  margin-top: 0.5em;
`
