export default function bitSwapRequired(a, b){
  let count = 0;
  for (let c = a ^ b; c != 0; c = c & (c-1))
    count++;
  return count;
};
