function checkPermutation(first, second) {
  // Remove whitespaces and make string an array
  first = first.replace(/\s/g,'').split('');
  second = second.replace(/\s/g,'').split('');

  // If their lengths are not equal, they can't be permutations
  if (first.length !== second.length)
    return false;

  // Char to ASCII, sort in ascending order and make it back to string
  first = first.map(c => c.charCodeAt(0)).sort((a,b) => a-b).join('');
  second = second.map(c => c.charCodeAt(0)).sort((a,b) => a-b).join('');

  // Now, permutations have to be identical
  if (first === second)
    return true;
  else
    return false;
}

module.exports = checkPermutation;
