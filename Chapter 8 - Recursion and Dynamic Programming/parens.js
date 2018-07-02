export default function parens(n) {
 let answers = [];
  let recurse = function(currParens, remainingPairs) {
    if (remainingPairs === 0) {
      answers.push(currParens);
    } else {
      let used = {};
      if (!used[`(${currParens})`]) {
        used[`(${currParens})`] = true;
        recurse(`(${currParens})`, remainingPairs - 1);
      }
      if (!used[`()${currParens}`]) {
        used[`()${currParens}`] = true;
        recurse(`()${currParens}`, remainingPairs - 1);
      }
      if (!used[`${currParens}()`]) {
        used[`${currParens}()`] = true;
        recurse(`${currParens}()`, remainingPairs - 1);
      }
    }
  };
  recurse('', n);
  return answers;
};
