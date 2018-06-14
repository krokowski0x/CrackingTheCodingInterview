function kthToLast(list, k) {
  if (k > list.length)
    throw new Error('The list is shorter than you\'ve thought!');
  return list.get(list.length - k).data;
}

module.exports = kthToLast;
