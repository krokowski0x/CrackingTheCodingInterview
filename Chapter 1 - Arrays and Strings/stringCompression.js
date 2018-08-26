export default function stringCompression(string) {
  // Number of char occurences
  let count = 0;
  // Final string
  let result = "";
  // String to array
  string = string.split("");
  // Go through a string from index 1, because we're comparing char to the previous one
  for (let i = 1; i < string.length; i++) {
    // There's one more of the same char until..
    count++;
    // ..it's different than previous or the last one
    if (string[i - 1] !== string[i] || i === string.length - 1) {
      // Add this char to result
      result += string[i - 1];
      // Add number of occurences
      result += count.toString();
      // Reset occurence count
      count = 0;
    }
  }
  // If compressed string is not shorter
  if (string.length - result.length < 1)
    // Return original
    return string.join("");
  // Else return compressed one
  else return result;
}
