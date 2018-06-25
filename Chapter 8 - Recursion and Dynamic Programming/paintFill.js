var withinBounds = function(point, screen) {
  var [row, col] = point;
  var rowHeight = screen.length;
  var colWidth = screen[0].length;
  return row >= 0 && row < rowHeight && col >=0 && col < colWidth;
};

var paintFill = function(screen, point, color) {
  var [row, col] = point;
  var currColor = screen[row][col];
  if (withinBounds(point, screen) && screen[row][col] !== color) {
    screen[row][col] = color;

    if (withinBounds([row + 1, col], screen) && screen[row + 1][col] === currColor) {
      paintFill(screen, [row + 1, col], color);
    }

    if (withinBounds([row + 1, col + 1], screen) && screen[row + 1][col + 1] === currColor) {
      paintFill(screen, [row + 1, col + 1], color);
    }

    if (withinBounds([row + 1, col - 1], screen) && screen[row + 1][col - 1] === currColor) {
      paintFill(screen, [row + 1, col - 1], color);
    }

    if (withinBounds([row, col + 1], screen) && screen[row][col + 1] === currColor) {
      paintFill(screen, [row, col + 1], color);
    }

    if (withinBounds([row, col - 1], screen) && screen[row][col - 1] === currColor) {
      paintFill(screen, [row, col - 1], color);
    }

    if (withinBounds([row - 1, col], screen) && screen[row - 1][col] === currColor) {
      paintFill(screen, [row - 1, col], color);
    }

    if (withinBounds([row - 1, col + 1], screen) && screen[row - 1][col + 1] === currColor) {
      paintFill(screen, [row - 1, col + 1], color);
    }

    if (withinBounds([row - 1, col - 1], screen) && screen[row - 1][col - 1] === currColor) {
      paintFill(screen, [row - 1, col - 1], color);
    }
  }
};
