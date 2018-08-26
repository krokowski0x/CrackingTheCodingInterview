export default function loopDetection(head) {
  let fast = head;
  let slow = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next;
    if (fast === slow && fast !== head.next) return true;

    if (fast) {
      fast = fast.next;
      if (fast === slow) return true;
    }
  }
  return false;
}
