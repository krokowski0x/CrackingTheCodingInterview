export default function findMagic(array, start, end) {
  if (start === undefined)
    start = 0;
  if (end === undefined)
    end = array.length - 1;

  let mid = Math.floor(start + (end - start) / 2);

  if (mid === start && array[mid] !== mid)
    return -1;
  else if (array[mid] === mid)
    return mid;
  else if (mid < array[mid])
    return findMagic(array, start, mid);
  else
    return findMagic(array, mid, end);
};
