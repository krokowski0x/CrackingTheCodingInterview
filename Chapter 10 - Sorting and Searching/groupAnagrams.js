export default function groupAnagrams(strArr) {
  if (!strArr)
   return 'where is your anagram?';

  return strArr
  .map(string => {
    return {
      original: string,
      sorted: string.split('').sort().join('')
  }})
  .sort((a,b) => a.sorted < b.sorted ? 1 : -1)
  .map(mapStr => mapStr.original);
};
