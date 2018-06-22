export default function insertion(N, M, i, j) {
  if (i >= 32 || j < i)
    return 0;

  let allOnes = ~0; // 11111111

  let left = allOnes << (j + 1); // left = 11100000
  let right = ((1 << i) - 1);    // right = 00000011
  let mask = left | right;       // mask = 11100011

  let n_cleared = N & mask;
  let m_shifted = M << i;

  return n_cleared | m_shifted;
};
