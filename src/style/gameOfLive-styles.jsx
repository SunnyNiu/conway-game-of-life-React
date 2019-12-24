import styled from "styled-components";
import Dropdown from 'react-dropdown'

export const CellStyle = styled.div`
  background-color: ${props => (props.value ? "green" : "pink")};
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 8px;
  font-size: 8px;
  text-align: center;
`;

export const GameTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`;

export const Title = styled.h2`
  text-align: left;
  color: palevioletred;
  background-color: #ffffff;
`;

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
  font-size: 1em;
  margin: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Speed = styled.button`
  display: inline;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  border: 2px none palevioletred;
  border-radius: 3px;
`;

export const DropdownType = styled(Dropdown)`
  margin: 0.5em;
`
export const Input = styled.input`
  margin: 2em;
`