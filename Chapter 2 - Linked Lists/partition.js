export default function partition(node, x) {
  let head = node;
  let tail = node;

  while (node) {
    let next = node.next;
    if (node.data < x) {
      node.next = head;
      head = node;
    } else {
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next = null;
  return head;
}
