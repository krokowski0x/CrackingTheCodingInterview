import { expect } from 'chai';

import Stack         from '../Data Structures/Stack';
import Queue         from '../Data Structures/Queue';
import TripleStack   from '../Chapter 3 - Stacks and Queues/threeInOne';
import MinStack      from '../Chapter 3 - Stacks and Queues/stackMin';
import StackOfStacks from '../Chapter 3 - Stacks and Queues/stackOfPlates';
import MyQueue       from '../Chapter 3 - Stacks and Queues/queueViaStacks';
import sortStack     from '../Chapter 3 - Stacks and Queues/sortStack';
import AnimalShelter from '../Chapter 3 - Stacks and Queues/animalShelter';

describe('Chapter 3 - Stacks and Queues', () => {
  describe('#TripleStack', () => {
    it('should act like 3 stacks', () => {
      const stack = new TripleStack();

      stack.push(1,1).push(1,2).push(1,3).push(2,1).push(2,2).push(2,3).push(3,1);
      stack.pop(2);
      stack.pop(3);

      expect(stack.getLength(1)).to.be.equal(3);
      expect(stack.getLength(2)).to.be.equal(2);
      expect(stack.isEmpty(3)).to.be.true;
    });
  });

  describe('#MinStack', () => {
    it('should know the minimum element', () => {
      const stack = new MinStack();

      stack.push(7).push(6).push(5);
      expect(stack.min()).to.be.equal(5);

      stack.pop();
      expect(stack.min()).to.be.equal(6);

      stack.push(2);
      expect(stack.min()).to.be.equal(2);
    });
  });

  describe('#StackOfStacks', () => {
    it('should overflow to the next stack if maximum size exeeded', () => {
      const stack = new StackOfStacks(2);

      stack.push(7).push(6).push(5);
      expect(stack.stacks.length).to.be.equal(2);

      stack.push(4).push(3);
      expect(stack.stacks.length).to.be.equal(3);
    });

    it('should have #popAt() function', () => {
      const stack = new StackOfStacks(2);

      stack.push(7).push(6).push(5).push(4).push(3);
      stack.popAt(3);
      expect(stack.stacks.length).to.be.equal(2);

      stack.popAt(1);
      stack.popAt(1);
      expect(stack.stacks.length).to.be.equal(1);
    });
  });

  describe('#MyQueue', () => {
    it('should consist of stacks and act like queue', () => {
      const queue = new MyQueue();

      queue.enqueue(1).enqueue(2).enqueue(3);
      expect(queue.dequeue()).to.be.equal(1);

    });
  });

  describe('#sortStack()', () => {
    it('should sort a stack', () => {
      const stack = new Stack();
      const stackSorted = new Stack();

      stack.push(7).push(2).push(8).push(1).push(3);
      stackSorted.push(8).push(7).push(3).push(2).push(1);

      expect(sortStack(stack)).to.deep.equal(stackSorted);
    });
  });

  describe('#AnimalShelter', () => {
    it('should act like two queues merged into one', () => {
      const shelter = new AnimalShelter();

      shelter.enqueueCat('Fluffykins')
           .enqueueDog('DougThePug')
           .enqueueCat('DifferentCat')
           .enqueueDog('NewDog');

      expect(shelter.dequeueCat()).to.be.equal('Fluffykins');
      expect(shelter.dequeueAny()).to.be.equal('DougThePug');
    });
  });
});
