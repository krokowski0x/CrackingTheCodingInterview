export default function stringRotation(first, second) {
  // If both strings have the same length which is > 0
  if (first.length > 0 && first.length === second.length)
    // The rotatation should be substring of their sum, e.g.
    // first = damn, second = mnda, first + second = da(mnda)mn
    return (first + second).includes(second);
  return false;
}
