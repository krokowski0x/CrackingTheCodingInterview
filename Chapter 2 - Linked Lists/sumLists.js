import { LinkedList, Node } from '../Data Structures/LinkedList';

export default function sumLists(first, second) {
  let num1 = [];
  let num2 = [];
  let iterator1 = first.head;
  let iterator2 = second.head;

  while (iterator1) {
    num1.push(iterator1.data.toString());
    iterator1 = iterator1.next;
  }
  while (iterator2) {
    num2.push(iterator2.data.toString());
    iterator2 = iterator2.next;
  }

  num1 = parseInt(num1.reverse().join(''));
  num2 = parseInt(num2.reverse().join(''));

  let num3 = (num1 + num2).toString().split('').reverse();
  let result = new LinkedList();
  num3.forEach(digit => result.add(parseInt(digit)));
  return result;
};
