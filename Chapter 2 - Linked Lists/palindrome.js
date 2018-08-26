export default function palindrome(list) {
  if (list.length % 2) list.remove(Math.floor(list.length / 2));

  let buffer1 = [];
  let buffer2 = [];
  let iterator = list.head;

  for (let i = 0; i < list.length / 2; i++) {
    buffer1.push(iterator.data);
    iterator = iterator.next;
  }
  for (let i = Math.floor(list.length / 2); i < list.length; i++) {
    buffer2.push(iterator.data);
    iterator = iterator.next;
  }

  return buffer1.join("") === buffer2.reverse().join("");
}
