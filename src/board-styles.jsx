import styled from "styled-components";

export const BoardStyle = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  background-color: black;
  padding: 10px;
`;

export const CellStyle = styled.div`
  background-color: ${props => (props.value ? "green" : "pink")};
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 8px;
  font-size: 8px;
  text-align: center;
`;
