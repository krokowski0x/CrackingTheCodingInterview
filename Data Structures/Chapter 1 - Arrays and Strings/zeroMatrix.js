export default function zeroMatrix(matrix) {
  if (matrix.length === 0)
    return false;

  const zeroScan = checkZeros(matrix);

  zeroifyCols(matrix, zeroScan);
  zeroifyRows(matrix, zeroScan);
  return matrix;
};

const checkZeros = (matrix) => {
  const rows = {};
  const cols = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }
  return { rows, cols };
};

const zeroifyCols = (matrix, zeroScan) => {
  for (let col in zeroScan.cols) {
    for (let row of matrix) {
      row[col] = 0;
    }
  }
};

const zeroifyRows = (matrix, zeroScan) => {
  for (let row in zeroScan.rows) {
    for (var i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }
  }
};
