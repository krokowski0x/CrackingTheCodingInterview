class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Stack {
  constructor() {
    this.top = null;
  }

  pop() {
    if (this.top === null) throw new Error("The stack is empty!");

    const item = this.top.data;
    this.top = this.top.next;
    return item;
  }

  push(data) {
    const item = new Node(data);
    item.next = this.top;
    this.top = item;
    return this;
  }

  peek() {
    if (this.top === null) throw new Error("The stack is empty!");
    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
}
