const chai = require('chai');

const expect = chai.expect;
const dirname = '../src/Chapter 2 - Linked Lists/';

const { LinkedList, Node } = require(`${dirname}LinkedList`);
const removeDups =           require(`${dirname}removeDups`);
const kthToLast =            require(`${dirname}kthToLast`);
const deleteMiddleNode =     require(`${dirname}deleteMiddleNode`);
const sumLists =             require(`${dirname}sumLists`);
const palindrome =           require(`${dirname}palindrome`);

describe('Chapter 2', () => {
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
      const tail = inputList.get(inputList.length-1);
      expect(() => deleteMiddleNode(inputList, head)).to.throw(Error);
      expect(() => deleteMiddleNode(inputList, tail)).to.throw(Error);
    });
  });

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
});
