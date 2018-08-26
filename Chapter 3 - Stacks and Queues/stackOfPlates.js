export default class StackOfStacks {
  constructor(maxSize) {
    if (arguments.length < 1) {
      throw new Error("maxSize argument is required");
    }
    this.stacks = [[]];
    this.max = maxSize;
  }

  push(value) {
    if (this.stacks[this.stacks.length - 1].length >= this.max) {
      this.stacks.push([]);
    }
    this.stacks[this.stacks.length - 1].push(value);
    return this;
  }

  pop() {
    let value = this.stacks[this.stacks.length - 1].pop();
    if (
      this.stacks.length > 1 &&
      this.stacks[this.stacks.length - 1].length === 0
    ) {
      this.stacks.pop();
    }
    return value;
  }

  popAt(number) {
    if (number < 1 || number > this.stacks.length) {
      throw new Error("stack number is invalid");
    }
    if (number === this.stacks.length) {
      return this.pop();
    }

    let stack = this.stacks[number - 1],
      value = stack.pop(),
      tempStack = [],
      nextStack;

    if (number < this.stacks.length) {
      for (let i = number; i < this.stacks.length; ++i) {
        nextStack = this.stacks[i];

        while (nextStack.length > 0) {
          tempStack.push(nextStack.pop());
        }
        stack.push(tempStack.pop());
        while (tempStack.length > 0) {
          nextStack.push(tempStack.pop());
        }
        stack = nextStack;
      }
    }
    if (
      this.stacks.length > 1 &&
      this.stacks[this.stacks.length - 1].length === 0
    ) {
      this.stacks.pop();
    }
    return value;
  }
}
