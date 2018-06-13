function palindromePermutation(string) {
  string = string
  .replace(/\s/g, '')
  .split('')
  .map(c => c.charCodeAt(0))
  .sort((a,b) => a-b);

  for (let i = string.length-1; i > 0; i--) {
    if (string[i] === string[i-1])
      string.splice(i-1, 2);
  }

  if (string.length === 0 || string.length === 1)
    return true;
  else
    return false;
}

module.exports = palindromePermutation;
