import createMatrix from '../functions/utility'

export function gliderGameBoard () {
  const board = createMatrix(40)
  const points = [[20, 23], [21, 24], [22, 22], [22, 23], [22, 24]]
  points.forEach(([x, y]) => board[x][y] = true)
  return board
}

export function smallExploderBoard () {
  const board = createMatrix(40)
  const points = [[18, 18], [19, 17], [19, 18], [19, 19], [20, 17], [20, 19], [21, 18]]
  points.forEach(([x, y]) => board[x][y] = true)
  return board
}

export function exploderBoard () {
  const board = createMatrix(40)
  const points = [[17, 17], [17, 19], [17, 21], [18, 17], [18, 21], [19, 17], [19, 21], [20, 17], [20, 21], [21, 17], [21, 19], [21, 21]]
  points.forEach(([x, y]) => board[x][y] = true)
  return board
}

export function tenCellRowBoard () {
  const board = createMatrix(40)
  const points = [[15, 15], [15, 16], [15, 17], [15, 18], [15, 19], [15, 20], [15, 21], [15, 22], [15, 23], [15, 24]]
  points.forEach(([x, y]) => board[x][y] = true)
  return board
}

export function lightweightBoard () {
  const board = createMatrix(40)
  const points = [[17, 17], [17, 18], [17, 19], [17, 20], [18, 16], [18, 20], [19, 20], [20, 16], [20, 19]]
  points.forEach(([x, y]) => board[x][y] = true)
  return board
}

export function tumblerBoard () {
  const board = createMatrix(40)
  const points = [
    [15, 16], [15, 17], [15, 19], [15, 20],
    [16, 16], [16, 17], [16, 19], [16, 20],
    [17, 17], [17, 19],
    [18, 15], [18, 17], [18, 19], [18, 21],
    [19, 15], [19, 17], [19, 19], [19, 21],
    [20, 15], [20, 16], [20, 20], [20, 21]]
  points.forEach(([x, y]) => board[x][y] = true)
  return board
}
