function isUnique_NINJA(string) {
  string = string
  // Remove whitespaces
  .replace(/\s/g,'')
  // String to array
  .split('')
  // Turn characters to their ascii codes
  .map(c => c.charCodeAt(0))
  // Sort in ascending order
  .sort((a,b) => a-b);

  for (let i = 0; i < string.length; i++) {
    // If any character is the same as neighbour it's not unique
    if (string[i] === string[i+1])
      return false;
  }
  // If we came this far, it's unique
  return true;
}

function isUnique(string) {
  // If its longer than ASCII characters amount it's not unique
  if (string.length > 128)
    return false;
  // Remove whitespaces
  string = string.replace(/\s/g,'');
  // Array of length equal to ASCII characters amount
  let char_set = Array(128).fill(false);
  // Iterate over string
  for (let i = 0; i < string.length; i++) {
    // Get ASCII value
    let val = string.charAt(i);
    // If it has already occured, it's not unique
    if (char_set[val])
      return false;
    // Set up 'flag' for this character
    char_set[val] = true;
  }
  // If we came this far, it's unique
  return true;
}

module.exports = isUnique;
