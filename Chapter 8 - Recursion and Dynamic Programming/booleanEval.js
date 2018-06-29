let dp = {};

export default function countEval(booleans, result) {
  if (booleans === undefined)
    return 'where\'s your boolean?';
  else if (booleans.length % 2 === 0)
    return 'your expression is a little strange. you sure it\'s right?';
  else if (booleans.length === 1)
    if (eval(booleans) === result)
      return 1;
    else
      return 0;

    const key = `${booleans}:${result}`;
    if (dp[key] === undefined) {
      let count = 0;
      let left;
      let right;
      for (let i = 1; i < booleans.length; i = i + 2) {
        left = booleans.slice(0, i);
        right = booleans.slice(i + 1);
        if (eval('0' + booleans[i] + '0') === result)
          count += countEval(left, 0) * countEval(right, 0);

        if (eval('0' + booleans[i] + '1') === result)
          count += countEval(left, 0) * countEval(right, 1);

        if (eval('1' + booleans[i] + '0') === result)
          count += countEval(left, 1) * countEval(right, 0);

        if (eval('1' + booleans[i] + '1') === result)
          count += countEval(left, 1) * countEval(right, 1);
      }
      dp[key] = count;
    }
    return dp[key];
  }
};
