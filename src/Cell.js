import styled from 'styled-components'
import PropTypes from 'prop-types'

const Cell = styled.div`
  height : 100%;
  min-width: 0;
  grid-column-end: ${({width = 1}) => `span ${width}`};
  grid-row-end: ${({height = 1}) => `span ${height}`}

  ${({left}) => left && `grid-column-start: ${left}`}
  ${({top}) => top && `grid-row-start: ${top}`}

  ${({center}) => center && `text-align: center`}

`
Cell.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  center: PropTypes.bool
}
export default Cell;