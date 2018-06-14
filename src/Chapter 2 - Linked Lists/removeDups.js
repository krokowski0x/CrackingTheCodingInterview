function removeDups(list) {
  let buffer = [];

  for (let i = 0; i < list.length; i++) {
    if (!buffer.includes(list.get(i).data))
      buffer.push(list.get(i).data);
    else {
      list.remove(i);
      i--;
    }
  }
  return list;
}

module.exports = removeDups;
