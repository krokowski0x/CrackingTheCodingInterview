export function getNextArith(n) {
  let c = n;
  let c0 = 0;
  let c1 = 0;
  while (((c & 1) == 0) && (c != 0)) {
    c0++;
    c >>= 1;
  }

  while ((c & 1) == 1) {
    c1++;
    c >>= 1;
  }

  /* If c is 0, then n is a sequence of 1s followed by a sequence of 0s. This is already the biggest
   * number with c1 ones. Return error.
   */
  if (c0 + c1 == 31 || c0 + c1 == 0) {
    return -1;
  }

  /* Arithmetically:
   * 2^c0 = 1 << c0
   * 2^(c1-1) = 1 << (c0 - 1)
   * next = n + 2^c0 + 2^(c1-1) - 1;
   */

  return n + (1 << c0) + (1 << (c1 - 1)) - 1;
};

export function getPrevArith(n) {
  let temp = n;
  let c0 = 0;
  let c1 = 0;
  while (((temp & 1) == 1) && (temp != 0)) {
    c1++;
    temp >>= 1;
  }

  /* If temp is 0, then the number is a sequence of 0s followed by a sequence of 1s. This is already
   * the smallest number with c1 ones. Return -1 for an error.
   */
  if (temp == 0) {
    return -1;
  }

  while ((temp & 1) == 0 && (temp != 0)) {
    c0++;
    temp >>= 1;
  }

  /* Arithmetic:
   * 2^c1 = 1 << c1
   * 2^(c0 - 1) = 1 << (c0 - 1)
   */
  return n - (1 << c1) - (1 << (c0 - 1)) + 1;
};
