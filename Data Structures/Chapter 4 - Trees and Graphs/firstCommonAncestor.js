export function findFirstCommonAnscestor(node1, node2) {
  if (!node1 || !node2) {
    throw new Error('node1 and node2 must both be valid nodes');
  }

  let h1 = height(node1),
    h2 = height(node2);
  node1 = moveUp(node1, h1 - h2);
  node2 = moveUp(node2, h2 - h1);
  while (node1 !== node2) {
    node1 = node1.parent;
    node2 = node2.parent;
  }

  return node1.val;
}

function height(node) {
  let count = 0;
  while (node) {
    node = node.parent;
    ++count;
  }
  return count;
}

function moveUp(node, count) {
  for (let i = count; i > 0; --i) {
    node = node.parent;
  }
  return node;
}
