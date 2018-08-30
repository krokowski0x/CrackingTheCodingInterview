class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(data) {
    const node = new Node(data);
    let nodeToCheck = this.head;

    if (!nodeToCheck) {
      this.head = node;
      this.length++;
      return this;
    }

    while (nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }

    nodeToCheck.next = node;
    this.length++;
    return this;
  }

  get(num) {
    let nodeToCheck = this.head;
    let count = 0;

    if (num > this.length)
      throw new Error("The list is shorter than you've thought!");

    while (count < num) {
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    return nodeToCheck;
  }

  remove(num) {
    let nodeToCheck = this.head;
    let count = 0;
    let prevNode = null;

    if (num > this.length)
      throw new Error("The list is shorter than you've thought!");

    if (num === 0) {
      this.head = nodeToCheck.next;
      this.length--;
      return this.head;
    }

    while (count < num) {
      prevNode = nodeToCheck;
      nodeToCheck = nodeToCheck.next;
      count++;
    }

    prevNode.next = nodeToCheck.next;
    nodeToCheck = null;
    this.length--;

    return this.head;
  }

  show() {
    let nodeToCheck = this.head;
    let count = 0;
    let result = "";
    while (count < this.length) {
      result += this.get(count).data.toString();
      if (count !== this.length - 1) result += " -> ";
      count++;
    }
    return result;
  }
}

module.exports = { LinkedList, Node };
