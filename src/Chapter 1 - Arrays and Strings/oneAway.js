function oneAway(first, second) {
  // If one of strings is more than 1 char off, it's not one away
  if (Math.abs(first.length - second.length) > 1)
    return false;

  // Str1 is shorter, str2 is longer
  let str1 = first.length < second.length ? first : second;
  let str2 = first.length < second.length ? second : first;
  let index1 = 0;
  let index2 = 0;
  let foundDiff = false;

  while (index2 < str2.length && index1 < str1.length) {
    if (str1.charAt(index1) !== str2.charAt(index2)) {
      // If it's a second occurence of a difference, it's not one away
      if (foundDiff)
        return false;
      foundDiff = true;

      // On replace, move shorter pointer
      if (str1.length === str2.length)
        index1++;
    } else {
      // If strings match, move shorter index
      index1++;
    }
    // Always move index for longer string
    index2++;
  }
  return true;
}

module.exports = oneAway;
