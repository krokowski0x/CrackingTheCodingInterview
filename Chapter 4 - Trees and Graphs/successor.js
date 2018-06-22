export function findSuccessor(node) {
  if (!node) {
    throw new Error('node cannot be null');
  }

  let snode;
  if (node.right) {
    snode = node.right;
    while (snode.left) {
      snode = snode.left;
    }
    return snode.val;
  }
  else {
    // go up until we find left path
    snode = node;
    while (snode.parent && snode !== snode.parent.left) {
      snode = snode.parent;
    }
    return snode.parent ? snode.parent.val : undefined;
  }
}
