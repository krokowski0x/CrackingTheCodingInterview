export default function sortedMerge (a, b){
  if (!a || !b)
    return 'where are your arrays?';

  let answer = [];
  let pointerA = 0;
  let pointerB = 0;

  // in-place solution: merge into A in place
  // helper function: move back array one space, from pointer to end
  const moveBack = (arr, pt, end) => {
    let currPt = end;
    while (currPt > pt) {
      arr[currPt] = arr[currPt - 1];
      currPt--;
    }
  };

  let end = a.length;
  // while pointerB is still traversing through B
  while (pointerB < b.length) {
    // if pointerA is done traversing (should just append all of B to back of A)
    if (pointerA === end) {
      a[pointerA] = b[pointerB];
      pointerA++;
      pointerB++;
      end++;
    // else if value at pointerA is smaller that value at pointerB (should not insert, continue traversing A)
    } else if (a[pointerA] < b[pointerB]) {
      pointerA++;
    } else {
      // otherwise move all elements from pointerA back by one space, and insert value at pointerB into a
      moveBack(a, pointerA, end);
      a[pointerA] = b[pointerB];
      pointerA++;
      pointerB++;
      end++;
    }
  }
  return a;
};
