const peek = stack => stack[stack.length - 1];

export default function intersection(head1, head2) {
  let stack1 = [];
  let stack2 = [];

  while (head1) {
    stack1.push(head1);
    head1 = head1.next;
  }

  while (head2) {
    stack2.push(head2);
    head2 = head2.next;
  }

  if (
    stack1.length === 0 ||
    stack2.length === 0 ||
    peek(stack1) !== peek(stack2)
  ) {
    return undefined;
  } else {
    let intersect;
    while (peek(stack1) === peek(stack2)) {
      intersect = peek(stack1);
      stack1.pop();
      stack2.pop();
    }
    return intersect ? true : false;
  }
}
