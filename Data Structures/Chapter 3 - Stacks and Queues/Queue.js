export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  remove() {
    if (this.first === null)
      throw new Error('The queue is empty!');

    const item = this.first.data;
    this.first = this.first.next;
    if (this.first === null)
      this.last = null;
    return item;
  }

  add(data) {
    const item = new Node(data);
    if (this.last)
      last.next = item;
    this.last = item;
    if (this.first === null)
      this.first = this.last;
  }

  peek() {
    if (this.first === null)
      throw new Error('The queue is empty!');
    return this.first.data;
  }

  isEmpty() {
    return this.first === null;
  }
};
