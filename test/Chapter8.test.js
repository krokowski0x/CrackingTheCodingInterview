import { expect } from 'chai';

import numWays       from '../Chapter 8 - Recursion and Dynamic Programming/tripleStep';
import findPaths     from '../Chapter 8 - Recursion and Dynamic Programming/robotInGrid';
import findMagic     from '../Chapter 8 - Recursion and Dynamic Programming/magicIndex';
import returnSubsets from '../Chapter 8 - Recursion and Dynamic Programming/powerSet';
import recurseMult   from '../Chapter 8 - Recursion and Dynamic Programming/recursiveMultiply';
import TowersOfHanoi from '../Chapter 8 - Recursion and Dynamic Programming/towersHanoi';
import permuteString from '../Chapter 8 - Recursion and Dynamic Programming/permWithoutDups';
import permNoDups    from '../Chapter 8 - Recursion and Dynamic Programming/permWithDups';
import parens        from '../Chapter 8 - Recursion and Dynamic Programming/parens';
import paintFill     from '../Chapter 8 - Recursion and Dynamic Programming/paintFill';
import coins         from '../Chapter 8 - Recursion and Dynamic Programming/coins';
import stackBoxes    from '../Chapter 8 - Recursion and Dynamic Programming/stackBoxes';
import countEval     from '../Chapter 8 - Recursion and Dynamic Programming/booleanEval';
import { leftShift, rightShift, nqueens } from '../Chapter 8 - Recursion and Dynamic Programming/nQueens';

describe('Chapter 8 - Recursion and Dynamic Programming', () => {

  describe('#numWays()', () => {
    it('should count all the possible ways of getting up the stairs', () => {
      expect(numWays(1)).to.be.equal(1);
      expect(numWays(2)).to.be.equal(2);
      expect(numWays(3)).to.be.equal(4);
    });
  });

  describe('#findPaths()', () => {
    it('should find the right path', () => {
      const grid = [
        ['0', '0', '0', '0'],
        ['0', 'x', '0', 'x'],
        ['x', '0', '0', '0'],
      ];
      const paths = [
        [0,0],
        [0,1],
        [0,2],
        [1,2],
        [2,2],
        [2,3],
      ];

      expect(...findPaths(grid)).to.deep.equal(paths);
    });
  });

  describe('#findMagic()', () => {
    it('should find the magic index if exists', () => {
      expect(findMagic([-1, 0, 1, 3, 9, 100])).to.be.equal(3);
      expect(findMagic([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700])).to.be.equal(5);
      //expect(findMagic([5, 5, 5, 5, 5, 5])).to.be.equal(5);
    });

    it('should return -1 if it doesn\'t exists', () => {
      expect(findMagic([-1, 56, 8, 11, 78, 100])).to.be.equal(-1);
    });
  });

  describe('#returnSubsets()', () => {
    it('should return all possible subsets', () => {
      const set = [1, 2, 3, 4];
      const subsets = [
        [],[1],[2],[3],[4],
        [1,2],[1,3],[1,4],[2,3],[2,4],[3,4],
        [1,2,3],[1,2,4],[1,3,4],[2,3,4],
        [1,2,3,4],
    ];
      expect(...returnSubsets(set)).to.deep.equal(...subsets);
    });
  });

  describe('#recurseMult()', () => {
    it('should multiply two numbers', () => {
      expect(recurseMult(2, 3)).to.be.equal(6);
      expect(recurseMult(1, 1)).to.be.equal(1);
      expect(recurseMult(20, 25)).to.be.equal(500);
    });
  });

  describe('#TowersOfHanoi()', () => {
    it('should move disks from first tower to the last', () => {
      const th = new TowersOfHanoi(6);
      const first = [...th.first];

      th.move(th.first, th.second, th.third, th.first.length);

      expect(th.first).to.deep.equal([]);
      expect(th.second).to.deep.equal([]);
      expect(th.third).to.deep.equal(first);
    });
  });

  describe('#permuteString()', () => {
    it('should compute all permutations of a string', () => {
      const string = 'abcd';
      // All permuations should be (string.length)! so 4! = 24
      expect(permuteString(string).length).to.be.equal(24);
    });
  });

  describe('#permNoDups()', () => {
    it('should compute all permutations of a string without dups', () => {
      const test1 = 'aaa';
      const test2 = 'abc';
      const test3 = 'aba';

      // It's one letter
      expect(permNoDups(test1).length).to.be.equal(1);
      // Like in previous function - 3! = 6
      expect(permNoDups(test2).length).to.be.equal(6);
      // Two letters so 2! + itself
      expect(permNoDups(test3).length).to.be.equal(3);
    });
  });

  describe('#parens()', () => {
    it('should compute all combinations of parentheses', () => {
      const result = [
        '((()))','(()())','(())()','()(())','()()()'
      ];

      expect(...parens(3)).to.deep.equal(...result);
    });
  });

  describe('#paintFill()', () => {
    it('should correctly fill the screen with paint', () => {
      const b = '#000000';
      const w = '#ffffff';
      const g = '#00ff00';
      const testScreen = [
        [b, b, b, b],
        [b, w, w, b],
        [b, w, w, b],
        [b, b, b, b]
      ];
      const testScreen2 = [
        [g, g, g, g],
        [g, w, w, g],
        [g, w, w, g],
        [g, g, g, g]
      ];
      const testPoint = [0, 1];

      paintFill(testScreen, testPoint, g)
      expect(testScreen).to.deep.equal(testScreen2);
    });
  });

  describe('#coins()', () => {
    it('should compute all the ways one can represent n cents', () => {
      // there is 1 way to represent 0 cents
      expect(coins(0)).to.be.equal(1);

      // there is 1 way to represent 1 cent
      expect(coins(1)).to.be.equal(1);

      // there is 1 way to represent 2 cents
      expect(coins(2)).to.be.equal(1);

      // there is 1 way to represent 3 cents
      expect(coins(3)).to.be.equal(1);

      // there is 1 way to represent 4 cents
      expect(coins(4)).to.be.equal(1);

      // there are 2 ways to represent 5 cents
      expect(coins(5)).to.be.equal(2);

      // there are 6 ways to represent 17 cents
      expect(coins(17)).to.be.equal(6);

      // there are 242 ways to represent 100 cents
      expect(coins(100)).to.be.equal(242);
    });
  });

  describe('#leftShift()', () => {
    it('should do binary left shift', () => {
      expect(leftShift('0001', 4) === '0010');
    });
  });

  describe('#rightShift()', () => {
    it('should do binary right shift', () => {
      expect(rightShift('0100', 4) === '0010');
    });
  });

  describe('#nQueens()', () => {
    it('should compute all the possible solutions', () => {
      // there are 0 solutions to represent 2 queens
      expect(nqueens(2).length === 0);

      // there are 0 solutions to represent 2 queens
      expect(nqueens(2).length === 0);

      // there are 0 solutions to represent 3 queens
      expect(nqueens(3).length === 0);

      // there are 2 solutions to represent 4 queens
      expect(nqueens(4).length === 2);

      // there are 92 solutions to represent 8 queens
      expect(nqueens(8).length === 92);
    });
  });

  describe('#stackBoxes()', () => {
    it('should compute highest possible stack', () => {
      // 'able to call stackBoxes
      expect(stackBoxes() === 'where are your boxes?');

      // 'able to stack one box
      const box1a = {
        width: 1,
        height: 1,
        depth: 1
      };
      expect(stackBoxes([box1a]) === 1);

      // 'able to stack one box and return height
      const box1b = {
        width: 1,
        height: 100,
        depth: 1
      };
      expect(stackBoxes([box1b]) === 100);


      // 'able to stack two increasingly large boxes
      const box1c = {
        width: 1,
        height: 1,
        depth: 1
      };
      const box2c = {
        width: 2,
        height: 2,
        depth: 2
      };
      expect(stackBoxes([box1c, box2c]) === 3);

      // 'able to stack three increasingly large boxes
      const box1d = {
        width: 1,
        height: 1,
        depth: 1
      };
      const box2d = {
        width: 2,
        height: 2,
        depth: 2
      };
      const box3d = {
        width: 3,
        height: 3,
        depth: 3
      };
      expect(stackBoxes([box1d, box2d, box3d]) === 6);

      // 'able to stack three increasingly large boxes out of order
      const box1e = {
        width: 1,
        height: 1,
        depth: 1
      };
      const box2e = {
        width: 2,
        height: 2,
        depth: 2
      };
      const box3e = {
        width: 3,
        height: 3,
        depth: 3
      };
      expect(stackBoxes([box2e, box3e, box1e]) === 6);

      // 'unable to stack three boxes, one tall, one wide, one deep
      const box1f = {
        width: 3,
        height: 1,
        depth: 1
      };
      const box2f = {
        width: 1,
        height: 3,
        depth: 1
      };
      const box3f = {
        width: 1,
        height: 1,
        depth: 3
      };
      expect(stackBoxes([box1f, box2f, box3f]) === 3);
    });
  });

  describe('#countEval()', () => {
    it('should coumpute all the possible parentheses arrangements', () => {
      // able to call booleanEval
      expect(countEval() === 'where\'s your boolean?');

      // 0| throws an error
      expect(countEval('0|') === 'your expression is a little strange. you sure it\'s right?');

      // 0 evaluates to 1 false
      expect(countEval('0', 0) === 1);

      // 0 evaluates to 0 true
      expect(countEval('0', 1) === 0);

      // 1 evaluates to 1 true
      expect(countEval('1', 1) === 1);

      // 1 evaluates to 0 false
      expect(countEval('1', 0) === 0);

      // 1|1 evaluates to 1 true
      expect(countEval('1|1', 0) === 0);

      // 1^0|0|1 evaluates to 2 false
      expect(countEval('1^0|0|1', 0) === 2);

      // 0&0&0&1^1|0 evaluates to 10 true
      expect(countEval('0&0&0&1^1|0', 1) === 10);
    });
  });
});
