export default function isUnique(string) {
  if (string.length > 128) return false;

  let char_set = Array(128).fill(false);
  string = string.replace(/\s/g, "");

  for (let val of string) {
    if (char_set[val]) return false;

    char_set[val] = true;
  }
  return true;
}
