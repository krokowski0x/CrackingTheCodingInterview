export default function listTreeByDepthOrder(tree) {
  let lists = [];
  addToList(lists, tree.root, 0);
  return lists;
}

function addToList(lists, node, depth) {
  if (node) {
    if (!lists[depth]) {
      lists[depth] = new LinkedList();
    }

    lists[depth].append(node.val);

    addToList(lists, node.left, depth + 1);
    addToList(lists, node.right, depth + 1);
  }
}
