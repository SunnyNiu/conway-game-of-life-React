function createMatrix(size) {
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

export default createMatrix