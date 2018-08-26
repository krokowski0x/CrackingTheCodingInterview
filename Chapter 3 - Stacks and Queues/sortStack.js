export default function sortStack(stack) {
  let temp = [];
  temp.push(stack.pop());

  while (!stack.isEmpty()) {
    let curr = stack.pop(),
      count = 0;

    while (temp.length && curr < temp[temp.length - 1]) {
      stack.push(temp.pop());
      ++count;
    }
    temp.push(curr);

    for (let i = 0; i < count; ++i) {
      temp.push(stack.pop());
    }
  }
  while (temp.length) {
    stack.push(temp.pop());
  }
  return stack;
}
