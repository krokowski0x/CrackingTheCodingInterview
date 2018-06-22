export default function checkPermutation(first, second) {
  first = first.replace(/\s/g,'');
  second = second.replace(/\s/g,'');

  if (first.length !== second.length)
    return false;

  first = first.split('').sort().join('');
  second = second.split('').sort().join('');

  return first === second;
};
