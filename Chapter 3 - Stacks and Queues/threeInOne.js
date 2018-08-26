export default class TripleStack {
  constructor() {
    this.array = [];
    this.sizes = [0, 0, 0];
  }

  getLength(stack) {
    return this.sizes[stack - 1];
  }

  push(stack, value) {
    let idx = this.getLength(stack) * 3 + stack - 1;
    this.array[idx] = value;
    ++this.sizes[stack - 1];
    return this;
  }

  pop(stack) {
    let length = this.getLength(stack),
      value;
    if (length > 0) {
      let idx = (length - 1) * 3 + stack - 1;
      value = this.array[idx];
      this.array[idx] = undefined;
      --this.sizes[stack - 1];
    }
    return value;
  }

  peek(stack) {
    let length = this.getLength(stack),
      value;
    if (length > 0) {
      let idx = (length - 1) * 3 + stack - 1;
      value = this.array[idx];
    }
    return value;
  }

  isEmpty(stack) {
    return this.getLength(stack) === 0;
  }
}
