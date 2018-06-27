const heap = new Heap();

export default function getRankOfNumber(x) {
  const stack = [];
  let rank = 0;
  let value;
  while (!heap.isEmpty()) {
    value = heap.remove();
    if (value === x && heap.peek() !== x) {
      heap.insert(value);
      while (stack.length > 0) {
        heap.insert(stack.pop());
      }
      return rank;
    } else {
      rank++;
      stack.push(value);
    }
  }
  while (stack.length > 0) {
    heap.insert(stack.pop());
  }
  return -1;
};

function track(x) {
  heap.insert(x);
};
