export default function deleteMiddleNode(list, node) {
  if (node === list.head || node === list.get(list.length-1))
    throw new Error('You can\'t remove head nor tail');
    
  for (let i = 0; i < list.length; i++) {
    if (list.get(i).data === node.data) {
      list.remove(i);
      return list;
    }
  }
};
