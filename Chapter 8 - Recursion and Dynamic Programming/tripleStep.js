export default function numWays(N) {
  let answer = 0;
  const recurse = function(number) {
    if (number === 0)
      answer++;
    else if (number > 0) {
      recurse(number - 1);
      recurse(number - 2);
      recurse(number - 3);
    }
  };
  recurse(N);
  return answer;
};
