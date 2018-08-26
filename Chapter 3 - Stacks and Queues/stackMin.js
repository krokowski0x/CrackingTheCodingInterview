import Stack from "../Data Structures/Stack";

export default class MinStack {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
    this.currMin = undefined;
  }

  push(value) {
    if (this.currMin === undefined || value <= this.currMin) {
      this.minStack.push(this.currMin);
      this.currMin = value;
    }
    this.stack.push(value);
    return this;
  }

  pop() {
    const answer = this.stack.pop();
    if (answer === this.currMin) {
      this.currMin = this.minStack.pop();
    }
    return answer;
  }

  peek() {
    return this.stack.peek();
  }

  isEmpty() {
    return this.stack.isEmpty();
  }

  min() {
    return this.currMin;
  }
}
