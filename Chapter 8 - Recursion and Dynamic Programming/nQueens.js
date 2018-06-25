var changeChar = function(string, position, char) {
  var answer = string.split('');
  answer[position] = char;
  return answer.join('');
};

var bitwiseOp = function(binaryString, n, callback) {
  var base10 = parseInt(binaryString, 2);
  base10 = callback(base10);
  var base2 = base10.toString(2);
  if (base2.length <= n) {
    var front = '';
    for (var i = base2.length; i < n; i++) {
      front += '0';
    }
    return front + base2;
  } else {
    return base2.slice(base2.length - n);
  }
};

var leftShift = function(binaryString, n) {
  return bitwiseOp(binaryString, n, (number) => number << 1);
};

var rightShift = function(binaryString, n) {
  return bitwiseOp(binaryString, n, (number) => number >>> 1);
};

var nqueens = function(n) {
  var board = [];
  var checker = '';
  var answers = [];

  for (var i = 0; i < n; i++) {
    board.push(-1);
    checker += '0';
  }

  var recurse = function(currentBoard, center, leftDiag, rightDiag, currRow) {
    if (currRow === n) {
      answers.push(currentBoard);
    }
    for (var i = 0; i < n; i++) {
      if (center.charAt(i) === '0' && leftDiag.charAt(i) === '0' && rightDiag.charAt(i) === '0') {
        currentBoard[i] = currRow;
        recurse(currentBoard, changeChar(center, i, '1'), leftShift(changeChar(leftDiag, i, '1'), n), rightShift(changeChar(rightDiag, i, '1'), n), currRow + 1);
        currentBoard[i] = -1; // untoggle board to save on space complexity for arrays per recursive step
      }
    }
  };
  recurse(board, checker, checker, checker, 0);
  return answers;
};=
