function rotateMatrix(matrix) {
  // If there's no matrix or it's not NxN, don't rotate
  if (matrix.length === 0 || matrix.length != matrix[0].length)
    return false;

  const N = matrix.length;
  // There's half as many layers as N
  for (let layer = 0; layer < N / 2; layer++) {
    let first = layer;
    let last = N - 1 - layer;
    // Take almost one row (N - 1) and rotate
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i];

      // Left -> top
      matrix[first][i] = matrix[last-offset][first];
      //Bottom -> left
      matrix[last-offset][first] = matrix[last][last-offset];
      // Right -> bottom
      matrix[last][last-offset] = matrix[i][last];
      // Top -> right
      matrix[i][last] = top;
    }
  }
  return matrix;
}

module.exports = rotateMatrix;
