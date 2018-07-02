const changeChar = function(string, position, char) {
  let answer = string.split('');
  answer[position] = char;
  return answer.join('');
};

const bitwiseOp = function(binaryString, n, callback) {
  let base10 = parseInt(binaryString, 2);
  base10 = callback(base10);
  let base2 = base10.toString(2);
  if (base2.length <= n) {
    let front = '';
    for (var i = base2.length; i < n; i++) {
      front += '0';
    }
    return front + base2;
  } else {
    return base2.slice(base2.length - n);
  }
};

export const leftShift = (binaryString, n) => bitwiseOp(binaryString, n, (number) => number << 1);

export const rightShift = (binaryString, n) => bitwiseOp(binaryString, n, (number) => number >>> 1);

const recurse = function(n, currentBoard, center, leftDiag, rightDiag, currRow) {
  if (currRow === n)
    answers.push(currentBoard);
  for (let i = 0; i < n; i++) {
    if (center.charAt(i) === '0' && leftDiag.charAt(i) === '0' && rightDiag.charAt(i) === '0') {
      currentBoard[i] = currRow;
      recurse(currentBoard, changeChar(center, i, '1'), leftShift(changeChar(leftDiag, i, '1'), n), rightShift(changeChar(rightDiag, i, '1'), n), currRow + 1);
      currentBoard[i] = -1;
    }
  }
};

export function nqueens(n) {
  let board = [];
  let checker = '';
  let answers = [];

  for (var i = 0; i < n; i++) {
    board.push(-1);
    checker += '0';
  }

  recurse(n, board, checker, checker, checker, 0);
  return answers;
};
