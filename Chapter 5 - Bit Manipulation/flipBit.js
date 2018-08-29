export default function flipBit(a) {
  if (~a == 0) return a.toString(2);

  let currentLength = 0;
  let previousLength = 0;
  let maxLength = 1;
  while (a != 0) {
    if ((a & 1) == 1) {
      currentLength++;
    } else if ((a & 1) == 0) {
      previousLength = (a & 2) == 0 ? 0 : currentLength;
      currentLength = 0;
    }
    maxLength = Math.max(previousLength + currentLength + 1, maxLength);
    a >>>= 1;
  }
  return maxLength;
}
