function isUnderPopulated(neighbourCount) {
  if (neighbourCount < 2) return true;
  return false;
}

module.exports = isUnderPopulated;
