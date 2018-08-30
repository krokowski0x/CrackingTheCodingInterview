export default function permNoDups(string) {
  let answers = [];
  let recurse = function(currPerm, remainingChars) {
    if (remainingChars.length === 0) {
      answers.push(currPerm);
    } else {
      let usedChars = {};
      for (let i = 0; i < remainingChars.length; i++) {
        if (!usedChars[remainingChars.charAt(i)]) {
          usedChars[remainingChars.charAt(i)] = true;
          recurse(
            currPerm + remainingChars.charAt(i),
            remainingChars.slice(0, i) + remainingChars.slice(i + 1)
          );
        }
      }
    }
  };
  recurse("", string);
  return answers;
}
