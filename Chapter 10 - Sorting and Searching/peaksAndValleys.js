export default function peaksAndValleys(array) {
  if (!array)
    return 'where is your array?';

  let isPeak = true;
  let curr;
  let right;
  for (let i = 0; i < array.length - 1; i++) {
    curr = array[i];
    right = array[i+1];
    if (isPeak) {
      if (curr < right)
        [array[i], array[i+1]] = [array[i+1], array[i]];
    } else {
      if (curr > right)
        [array[i], array[i+1]] = [array[i+1], array[i]];
    }
    isPeak = !isPeak;
  }
  return array;
};
