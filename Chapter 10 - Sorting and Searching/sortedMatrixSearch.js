export default function sortedMatrixSearch (matrix, value, front, back) {
  if (!matrix)
    return 'where is your matrix?';

  const m = matrix.length;
  const n = matrix[0].length;

  if (!front && !back) {
    front = 0;
    back = m * n;
  }

  if (value > back || value === 0)
    return -1;

  let mid = Math.floor((front + back) / 2);
  const row = Math.floor(mid / n);
  const col = mid % n;

  if (matrix[row][col] === value)
    return [row, col];
  else if (value < matrix[row][col])
    return sortedMatrixSearch(matrix, value, front, mid);
  else
    return sortedMatrixSearch(matrix, value, mid + 1, back);
};
