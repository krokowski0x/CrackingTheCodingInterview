export class Listy {
  constructor(array) {
    this.container = array || [];
  };

  elementAt(i) {
    if (i >= this.container.length || i < 0)
      return -1;
    else
      return this.container[i];
  };
};

const findEnd = (listy, last, term) => {
  if (last === undefined && term === undefined) {
    last = 0;
    term = 1;
    if (listy.elementAt(last) === -1)
      return 0;
  }
  if (listy.elementAt(last) !== -1 && listy.elementAt(term) !== -1)
    return findEnd(listy, last, term * 2);
  else if (listy.elementAt(last) !== -1 && listy.elementAt(term) === -1) {
    if (last === term - 1)
      return term;

    const half = Math.floor((term - last) / 2);
    const mid = last + half;

    if (listy.elementAt(mid) === -1)
      return findEnd(listy, last, mid);
    else
      return findEnd(listy, mid, term);
} else
    throw `error: index ${last} is ${listy.elementAt(last)} and ${term} is ${listy.elementAt(term)}`;
};

export function sortedSearchNoSize (listy, value, front, back) {
  if (!listy)
    return 'what are we searching?';

  if (front === undefined && back === undefined) {
    front = 0;
    back = findEnd(listy);
  }

  if (front === back)
    return -1;

  const half = Math.floor((back - front) / 2);
  const mid = front + half;

  if (listy.elementAt(mid) === value) {
    return mid;
  } else if (value < listy.elementAt(mid)) {
    return sortedSearchNoSize(listy, value, front, mid);
  } else {
    if (mid === back - 1) {
     return -1;
    } else {
      return sortedSearchNoSize(listy, value, mid, back);
    }
  }
};
