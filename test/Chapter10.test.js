import { expect } from 'chai';

import groupAnagrams                 from '../Chapter 10 - Sorting and Searching/groupAnagrams';
import peaksAndValleys               from '../Chapter 10 - Sorting and Searching/peaksAndValleys';
import { track, getRankOfNumber }    from '../Chapter 10 - Sorting and Searching/rankFromStream';
import searchInRotatedArray          from '../Chapter 10 - Sorting and Searching/searchInRotatedArray';
import sortedMatrixSearch            from '../Chapter 10 - Sorting and Searching/sortedMatrixSearch';
import sortedMerge                   from '../Chapter 10 - Sorting and Searching/sortedMerge';
import { Listy, sortedSearchNoSize } from '../Chapter 10 - Sorting and Searching/sortedSearchNoSize';
import { nonBlankMid, sparseSearch } from '../Chapter 10 - Sorting and Searching/sparseSearch';

describe('Chapter 10 - Sorting and Searching', () => {
  describe('#sortedMerge()', () => {
    it('should merge to sorted arrays', () => {
      // sortedMerge is callable
      expect(sortedMerge()).to.be.equal('where are your arrays?');

      // sortedMerge merges in order
      expect(sortedMerge([0, 2, 4], [1, 3, 5])).to.deep.equal([0, 1, 2, 3, 4, 5]);

      // sortedMerges sorted arrays
      expect(sortedMerge([0, 1, 2], [3, 4, 5])).to.deep.equal([0, 1, 2, 3, 4, 5]);

      // sortedMerge merges empty arrays
      expect(sortedMerge([0, 1, 2], [])).to.deep.equal([0, 1, 2]);
    });
  });

  describe('#groupAnagrams()', () => {
    it('should group the anagrams while sorting', () => {
      const anagrams = [
        'motherinlaw',
        'debit card',
        'dormitory',
        'theearthquakes',
        'astronomer',
        'punishments',
        'schoolmaster',
        'hitlerwoman',
        'badcredit',
        'dirtyroom',
        'thequeershakes',
        'moonstarrer',
        'ninethumps',
        'theclassroom'
      ];
      const anagramsSorted = [
        'ninethumps',
        'punishments',
        'dormitory',
        'dirtyroom',
        'astronomer',
        'moonstarrer',
        'motherinlaw',
        'hitlerwoman',
        'thequeershakes',
        'schoolmaster',
        'theclassroom',
        'badcredit',
        'theearthquakes',
        'debit card',
      ];

      // groupAnagrams can be called
      expect(groupAnagrams()).to.be.equal('where is your anagram?');

      // groupAnagrams can be sorted
      expect(groupAnagrams(anagrams)).to.deep.equal(anagramsSorted);
    });
  });

  describe('#searchInRotatedArray()', () => {
    it('should find a number in rotated array', () => {
      // searchInRotatedArray can be called
      expect(searchInRotatedArray()).to.be.equal('where is the array?');

      // find in unrotated array
      expect(searchInRotatedArray([1, 2, 3, 4], 3)).to.be.equal(2);

      // find in rotated array
      expect(searchInRotatedArray([3, 4, 1, 2], 1)).to.be.equal(2);

      // find last item in rotated array
      expect(searchInRotatedArray([3, 4, 1, 2], 4)).to.be.equal(1);

      // return -1 for values not in array
      expect(searchInRotatedArray([3, 4, 1, 2], 10)).to.be.equal(-1);
    });
  });

  describe('#sortedSearchNoSize()', () => {
    it('should find an index at which element x occurs', () => {

      // sortedSearchNoSize is available as a function
      expect(sortedSearchNoSize()).to.be.equal('what are we searching?');

      // Listy is working
      let listy = new Listy([1, 2, 3, 4]);
      expect(listy.length).to.be.undefined;
      expect(listy[1]).to.be.undefined;
      expect(listy.length).to.be.undefined;
      expect(listy.elementAt(10)).to.be.equal(-1);
      expect(listy.elementAt(2)).to.be.equal(3);

      // sortedSearchNoSize works as expected
      listy = new Listy([2, 3, 4, 6]);
      expect(sortedSearchNoSize(listy, 3)).to.be.equal(1);
      expect(sortedSearchNoSize(listy, 2)).to.be.equal(0);
      expect(sortedSearchNoSize(listy, 6)).to.be.equal(3);
      expect(sortedSearchNoSize(listy, 1)).to.be.equal(-1);
      expect(sortedSearchNoSize(listy, 10)).to.be.equal(-1);
      expect(sortedSearchNoSize(listy, 5)).to.be.equal(-1);
    });
  });

  describe('#sparseSearch()', () => {
    it('should find a location of a given string', () => {
      // sparseSearch can be called
      expect(sparseSearch()).to.be.equal('what are you searching?');

      // nonBlankMid works
      expect(nonBlankMid(['', '', '', '', '', '', '', '', '', '', '', ''], 0, 12)).to.be.equal(-1);
      expect(nonBlankMid(['', '', '', '', '', '', '', '', '', 'hello', '', ''], 0, 12)).to.be.equal(9);
      expect(nonBlankMid(['', 'hello', '', '', '', '', '', '', '', '', '', ''], 0, 12)).to.be.equal(1);
      expect(nonBlankMid(['hello', '', '', '', '', '', '', '', '', '', '', ''], 0, 12)).to.be.equal(0);
      expect(nonBlankMid(['', '', '', '', '', '', '', '', '', '', '', 'hello'], 0, 12)).to.be.equal(11);

      // sparseSearch works
      expect(sparseSearch('ball', ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''])).to.be.equal(4);
      expect(sparseSearch('ball', ['', '', '', '', '', '', '', '', '', ''])).to.be.equal(-1);
    });
  });

  describe('#sortedMatrixSearch()', () => {
    it('should find a given element', () => {
      // sortedMatrixSearch can be called
      expect(sortedMatrixSearch()).to.be.equal('where is your matrix?');

      // sortedMatrixSearch finds existing values
      expect(sortedMatrixSearch([[1, 2], [3, 4]], 3)).to.deep.equal([1, 0]);
      expect(sortedMatrixSearch([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9)).to.deep.equal([2, 2]);
      expect(sortedMatrixSearch([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)).to.deep.equal([0, 0]);
      expect(sortedMatrixSearch([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)).to.deep.equal([1, 1]);

      // sortedMatrixSearch returns -1 for value greater than range
      expect(sortedMatrixSearch([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 100)).to.be.equal(-1);

      // sortedMatrixSearch returns -1 for value absent from range
      expect(sortedMatrixSearch([[1, 2, 3], [5, 6, 7], [8, 9, 10]], 4)).to.be.equal(-1);

      // sortedMatrixSearch returns -1 for value lower than range
      expect(sortedMatrixSearch([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0)).to.be.equal(-1);
    });
  });

  describe('#getRankOfNumber()', () => {
    it('should return number of values =< than x', () => {
      // insert 5, 1, 4, 4, 5, 9, 13, 7, 3
      track(5);
      track(1);
      track(4);
      track(4);
      track(5);
      track(9);
      track(13);
      track(7);
      track(3);

      expect(getRankOfNumber(1)).to.be.equal(0);
      expect(getRankOfNumber(3)).to.be.equal(1);
      expect(getRankOfNumber(4)).to.be.equal(3);
    });
  });

  describe('#peaksAndValleys()', () => {
    it('should sort the array by peaks and valleys', () => {
      expect(peaksAndValleys([5, 3, 1, 2, 3])).to.deep.equal([5, 1, 3, 2, 3]);
    });
  });
});
