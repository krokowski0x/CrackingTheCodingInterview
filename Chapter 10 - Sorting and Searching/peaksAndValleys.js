function swap(array, i, j) {
  const valueI = array[i];
  const valueJ = array[j];
  array[i] = valueJ;
  array[j] = valueI;
};

export default function peaksAndValleys(array) {
  if (!Array.isArray(array)) { return 'where is your array?';  }
  let isPeak = true;
  let curr;
  let right;
  for (let i = 0; i < array.length - 1; i++) {
    curr = array[i];
    right = array[i+1];
    if (isPeak) {
      if (curr < right) {
        swap(array, i, i+1);
      }
    } else {
      if (curr > right) {
        swap(array, i, i+1);
      }
    }
    isPeak = !isPeak;
  }
  return array;
};
