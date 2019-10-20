function isOutOfBounds(index, array) {
  const length = array.length;
  if (index >= length || index < 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = isOutOfBounds;
