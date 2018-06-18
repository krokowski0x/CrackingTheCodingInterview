import { expect } from 'chai';

import { LinkedList, Node } from '../Data Structures/Chapter 2 - Linked Lists/LinkedList';
import removeDups           from '../Data Structures/Chapter 2 - Linked Lists/removeDups';
import kthToLast            from '../Data Structures/Chapter 2 - Linked Lists/kthToLast';
import deleteMiddleNode     from '../Data Structures/Chapter 2 - Linked Lists/deleteMiddleNode';
import partition            from '../Data Structures/Chapter 2 - Linked Lists/partition';
import sumLists             from '../Data Structures/Chapter 2 - Linked Lists/sumLists';
import palindrome           from '../Data Structures/Chapter 2 - Linked Lists/palindrome';
import intersection         from '../Data Structures/Chapter 2 - Linked Lists/intersection';
import loopDetection        from '../Data Structures/Chapter 2 - Linked Lists/loopDetection';

describe('Chapter 2 - Linked Lists', () => {
  describe('#removeDups()', () => {
    it('should remove duplicate nodes', () => {
      const inputList = new LinkedList();
      const outputList = new LinkedList();

      inputList.add(2).add(3).add(45).add(456).add(54).add(2).add(3).add(11);
      outputList.add(2).add(3).add(45).add(456).add(54).add(11);

      expect(removeDups(inputList).show()).to.equal(outputList.show());
    });
  });

  describe('#kthToLast()', () => {
    it('should return kth to the last node', () => {
      const inputList = new LinkedList();

      inputList.add(2).add(3).add(45).add(456).add(54).add(2).add(3).add(11);

      expect(kthToLast(inputList, 4)).to.equal(54);
    });

    it('should throw an error if k > list.length', () => {
      const inputList = new LinkedList();

      inputList.add(2).add(3).add(45).add(456).add(54).add(2).add(3).add(11);

      expect(() => kthToLast(inputList, 20)).to.throw(Error);
    });

    it('should throw an error if k < 0', () => {
      const inputList = new LinkedList();

      inputList.add(2).add(3).add(45).add(456).add(54).add(2).add(3).add(11);

      expect(() => kthToLast(inputList, -1)).to.throw(Error);
    });
  });

  describe('#deleteMiddleNode()', () => {
    it('should delete given node', () => {
      const inputList = new LinkedList();
      const outputList = new LinkedList();
      const node = new Node(456);

      inputList.add(2).add(3).add(45).add(456).add(54).add(2).add(3).add(11);
      outputList.add(2).add(3).add(45).add(54).add(2).add(3).add(11);

      expect(deleteMiddleNode(inputList, node).show()).to.equal(outputList.show());
    });

    it('shouldn\'t delete head nor tail', () => {
      const inputList = new LinkedList();
      const outputList = new LinkedList();

      inputList.add(2).add(3).add(45).add(456).add(54).add(2).add(3).add(11);

      const head = inputList.head;
      const tail = inputList.get(inputList.length - 1);

      expect(() => deleteMiddleNode(inputList, head)).to.throw(Error);
      expect(() => deleteMiddleNode(inputList, tail)).to.throw(Error);
    });
  });

  // describe('#partition()', () => {
  //   it('should partition list around given node', () => {
  //     const inputList = new LinkedList();
  //     const outputList = new LinkedList();
  //
  //     inputList.add(3).add(5).add(8).add(5).add(10).add(2).add(1);
  //     outputList.add(3).add(1).add(2).add(10).add(5).add(5).add(8);
  //
  //     expect(partition(inputList.head, 5)).to.deep.equal(outputList.head);
  //   });
  // });

  describe('#sumLists()', () => {
    it('should sum two lists', () => {
      const inputList1 = new LinkedList();
      const inputList2 = new LinkedList();
      const outputList = new LinkedList();

      inputList1.add(7).add(1).add(6);
      inputList2.add(5).add(9).add(2);
      outputList.add(2).add(1).add(9);

      expect(sumLists(inputList1, inputList2).show()).to.equal(outputList.show());
    });
  });

  describe('#palindrome()', () => {
    it('should check if list is a palindrome', () => {
      const inputList1 = new LinkedList();
      const inputList2 = new LinkedList();

      inputList1.add(7).add(1).add(6).add(6).add(1).add(7);
      inputList2.add(7).add(1).add(6);

      expect(palindrome(inputList1)).to.be.true;
      expect(palindrome(inputList2)).to.be.false;
    });
  });

  describe('#intersection()', () => {
    it('should detect if two lists intersect', () => {
      var a = new Node('a');
      var b = new Node('b');
      var c = new Node('c');
      var d = new Node('d');
      var e = new Node('e');
      var f = new Node('f');
      var g = new Node('g');
      var h = new Node('h');

      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      e.next = f;
      f.next = g;
      g.next = h;

      var a1 = new Node('a1');
      var b1 = new Node('b1');
      var c1 = new Node('c1');

      a1.next = b1;
      b1.next = c1;
      c1.next = d;

      expect(intersection(a, a1)).to.be.true;
    });
  });

  describe('#loopDetection()', () => {
    it('should detect if list has a loop in it', () => {
      const a = new Node();
      const b = new Node();
      const c = new Node();
      const d = new Node();
      const e = new Node();
      const f = new Node();

      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      e.next = f;
      f.next = c;
      
      expect(loopDetection(a)).to.be.true;
    });
  });
});
