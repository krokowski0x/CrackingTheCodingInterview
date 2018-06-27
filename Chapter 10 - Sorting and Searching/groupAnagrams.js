export default function groupAnagrams(strArr) {
  if (strArr === undefined) {
   return 'where is your anagram?';
  } else {
    let mapStrArr = strArr.map((string) => {
      return {
        original: string,
        sorted: string.split('').sort().join('')
      };
    });

    mapStrArr.sort((a, b) => {
      return a.sorted < b.sorted ? 1 : -1;
    });

    const answer = mapStrArr.map((mapStr) => {
      return mapStr.original;
    });

    return answer;
  }
};
