const withinBounds = function(point, screen) {
  let [row, col] = point;
  let rowHeight = screen.length;
  let colWidth = screen[0].length;
  return row >= 0 && row < rowHeight && col >=0 && col < colWidth;
};

export default function paintFill(screen, point, color) {
  let [row, col] = point;
  let currColor = screen[row][col];
  if (withinBounds(point, screen) && screen[row][col] !== color) {
    screen[row][col] = color;

    if (withinBounds([row + 1, col], screen) && screen[row + 1][col] === currColor)
      paintFill(screen, [row + 1, col], color);

    if (withinBounds([row + 1, col + 1], screen) && screen[row + 1][col + 1] === currColor)
      paintFill(screen, [row + 1, col + 1], color);

    if (withinBounds([row + 1, col - 1], screen) && screen[row + 1][col - 1] === currColor)
      paintFill(screen, [row + 1, col - 1], color);

    if (withinBounds([row, col + 1], screen) && screen[row][col + 1] === currColor)
      paintFill(screen, [row, col + 1], color);

    if (withinBounds([row, col - 1], screen) && screen[row][col - 1] === currColor)
      paintFill(screen, [row, col - 1], color);

    if (withinBounds([row - 1, col], screen) && screen[row - 1][col] === currColor)
      paintFill(screen, [row - 1, col], color);

    if (withinBounds([row - 1, col + 1], screen) && screen[row - 1][col + 1] === currColor)
      paintFill(screen, [row - 1, col + 1], color);

    if (withinBounds([row - 1, col - 1], screen) && screen[row - 1][col - 1] === currColor)
      paintFill(screen, [row - 1, col - 1], color);
  }
};
