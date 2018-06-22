import { expect } from 'chai';

import isUnique              from '../Chapter 1 - Arrays and Strings/isUnique';
import checkPermutation      from '../Chapter 1 - Arrays and Strings/checkPermutation';
import URLify                from '../Chapter 1 - Arrays and Strings/URLify';
import palindromePermutation from '../Chapter 1 - Arrays and Strings/palindromePermutation';
import oneAway               from '../Chapter 1 - Arrays and Strings/oneAway';
import stringCompression     from '../Chapter 1 - Arrays and Strings/stringCompression';
import rotateMatrix          from '../Chapter 1 - Arrays and Strings/rotateMatrix';
import zeroMatrix            from '../Chapter 1 - Arrays and Strings/zeroMatrix';
import stringRotation        from '../Chapter 1 - Arrays and Strings/stringRotation';

describe('Chapter 1 - Arrays and Strings', () => {

  describe('#isUnique()', () => {
    it('should work for simple words', () => {
      expect(isUnique('this')).to.be.true;
      expect(isUnique('lel')).to.be.false;
    });

    it('should ignore spaces', () => {
      expect(isUnique(' t h i s ')).to.be.true;
      expect(isUnique('this is false')).to.be.false;
    });
  });

  describe('#checkPermutation()', () => {
    it('should work for simple words', () => {
      expect(checkPermutation('john', 'nohj')).to.be.true;
      expect(checkPermutation('john', 'bob')).to.be.false;
    });

    it('should ignore spaces', () => {
      expect(checkPermutation('john', 'n  oh j  ')).to.be.true;
    });
  });

  describe('#URLify()', () => {
    it('should work for basic examples', () => {
      expect(URLify('Mr John Smith')).to.equal('Mr%20John%20Smith');
    });

    it('should not include spaces at the end', () => {
      expect(URLify('Mr John Smith        ')).to.equal('Mr%20John%20Smith');
    });
  });

  describe('#palindromePermutation()', () => {
    it('should work for simple words', () => {
      expect(palindromePermutation('eye')).to.be.true;
      expect(palindromePermutation('llel')).to.be.false;
    });

    it('should ignore spaces', () => {
      expect(palindromePermutation('tact coa')).to.be.true;
      expect(palindromePermutation('this won\'t work')).to.be.false;
    });
  });

  describe('#oneAway()', () => {
    it('should work for inserting a character', () => {
      expect(oneAway('pale', 'pales')).to.be.true;
      expect(oneAway('pale', 'palessss')).to.be.false;
    });

    it('should work for removing a character', () => {
      expect(oneAway('pale', 'ple')).to.be.true;
      expect(oneAway('pale', 'p')).to.be.false;
    });

    it('should work for replacing a character', () => {
      expect(oneAway('pale', 'bale')).to.be.true;
      expect(oneAway('pale', 'bake')).to.be.false;
    });
  });

  describe('#stringCompression()', () => {
    it('should return original string if it\'s shorter', () => {
      expect(stringCompression('abcd')).to.equal('abcd');
      expect(stringCompression('aabbccdd')).to.equal('aabbccdd');
    });

    it('should compress string when possible', () => {
      expect(stringCompression('aabcccccaaa')).to.equal('a2b1c5a2');
    });
  });

  describe('#rotateMatrix()', () => {
    it('should rotate a matrix by 90 degrees', () => {
      let input = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
      ];
      let output = [
        [13,9,5,1],
        [14,10,6,2],
        [15,11,7,3],
        [16,12,8,4]
      ];
      expect(rotateMatrix(input)).to.deep.equal(output);
    })
  });

  describe('#zeroMatrix()', () => {
    it('should zero only valid rows and columns', () => {
      let input = [
        [1,2,3,4,5],
        [1,0,3,4,5],
        [1,2,3,0,5],
        [1,2,3,4,5]
      ];
      let output = [
        [1,0,3,0,5],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [1,0,3,0,5]
      ];
      expect(zeroMatrix(input)).to.deep.equal(output);
    })
  });

  describe('#stringRotation()', () => {
    it('should work', () => {
      expect(stringRotation('waterbottle', 'erbottlewar')).to.be.true;
    });
  });
});
