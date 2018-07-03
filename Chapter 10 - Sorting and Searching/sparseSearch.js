const findMid = (front, back) => {
  const half = Math.floor((back - front) / 2);
  return front + half;
};

export function nonBlankMid (array, front, back) {
  let mid = findMid(front, back);
  let startSearch = {
    front: front,
    back: back,
    mid: mid
  };
  let searchQueue = [startSearch];
  let currSearch;
  let currFront;
  let currMid;
  let currBack;
  while (searchQueue.length > 0) {
    currSearch = searchQueue.shift();
    currFront = currSearch.front;
    currMid = currSearch.mid;
    currBack = currSearch.back;
    if (array[currMid] !== '') {
      return currMid;
    } else {
      if (currFront < currMid) {
          searchQueue.push({
            front: currFront,
            back: currMid,
            mid: findMid(currFront, currMid)
          });
      }
      if (currMid < currBack) {
        if (currMid !== currBack - 1) {
          searchQueue.push({
            front: currMid,
            back: currBack,
            mid: findMid(currMid, currBack)
          });
        }
      }
    }
  }
  return -1;
};

export function sparseSearch (string, array, front, back) {
  if (!string || !array)
    return 'what are you searching?';

  if (!front && !back) {
    front = 0;
    back = array.length;
    if (front === back)
      return -1;
  }

  const mid = nonBlankMid(array, front, back);

  if (mid === -1)
    return -1;
  else if (string === array[mid])
    return mid;
  else if (string < array[mid])
    return sparseSearch(string, array, front, mid);
  else
    return sparseSearch(string, array, mid, back);
};
