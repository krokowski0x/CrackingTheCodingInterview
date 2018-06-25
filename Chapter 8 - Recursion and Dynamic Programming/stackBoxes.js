var dp = {};

var findStackables = (boxes, basebox) => {
  var stackables = [];
  // for each box, check all other boxes for which it is dominant
  boxes.forEach((box) => {
    if (box.height < basebox.height && box.width < basebox.width && box.depth < basebox.depth) {
      stackables.push(box);
    }
  });
  return stackables;
};

var stackBoxes = function(boxes) {
  if (boxes === undefined) {
    return 'where are your boxes?';
  }

  if (boxes.length === 0) {
    return 0;
  }
  boxes.sort();
  var key = JSON.stringify(boxes);
  if (dp[key] === undefined) {
    var height = 0;

    boxes.forEach((box) => {
      var stackables = findStackables(boxes, box);
      var currHeight = box.height + stackBoxes(stackables);
      height = Math.max(currHeight, height);
    });
    dp[key] = height;
  }
  return dp[key];
};
