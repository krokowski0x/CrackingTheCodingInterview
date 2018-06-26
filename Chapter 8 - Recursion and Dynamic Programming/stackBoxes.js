let dp = {};

const findStackables = (boxes, basebox) => {
  let stackables = [];
  
  boxes.forEach((box) => {
    if (box.height < basebox.height && box.width < basebox.width && box.depth < basebox.depth) {
      stackables.push(box);
    }
  });
  return stackables;
};

export default function stackBoxes(boxes) {
  if (boxes === undefined)
    return 'where are your boxes?';

  if (boxes.length === 0)
    return 0;

  boxes.sort();
  let key = JSON.stringify(boxes);
  if (dp[key] === undefined) {
    let height = 0;

    boxes.forEach((box) => {
      let stackables = findStackables(boxes, box);
      let currHeight = box.height + stackBoxes(stackables);
      height = Math.max(currHeight, height);
    });
    dp[key] = height;
  }
  return dp[key];
};
