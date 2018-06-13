function zeroMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let zeroRows = [];
  let zeroCols = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[rows][0] === 0) {
        zeroRows.push(rows);
        zeroCols.push(cols);
      }
    }
  }

  zeroRows
  // For each row we have to zero
  .forEach(row => matrix[row]
  // For each number in this row
  .forEach(i => i = 0));

  matrix
  // For each row in the matrix
  .forEach(row => row
  // For each number in the row
  .forEach((number, index) => zeroCols
  // If that's column we need to zero
  .includes(index) ? number = 0 : null))
  
  return matrix;
}

module.exports = zeroMatrix;
