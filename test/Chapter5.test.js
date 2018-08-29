import { expect } from "chai";

import insertion from "../Chapter 5 - Bit Manipulation/insertion";
import printBinary from "../Chapter 5 - Bit Manipulation/printBinary";
import flipBit from "../Chapter 5 - Bit Manipulation/flipBit";
import {
  getNextArith,
  getPrevArith
} from "../Chapter 5 - Bit Manipulation/getArith";
import bitSwapRequired from "../Chapter 5 - Bit Manipulation/conversion";
import swapOddEvenBits from "../Chapter 5 - Bit Manipulation/pairwiseSwap";

describe("Chapter 5 - Bit Manipulation", () => {
  describe("#insertion()", () => {
    it("should insert one number into another", () => {
      expect(insertion(1024, 19, 2, 6)).to.be.equal(1100);
    });
  });

  describe("#printBinary()", () => {
    it("should print non-integer in binary", () => {
      expect(printBinary(0.875)).to.be.equal(".111");
    });
  });

  describe("#flipBit()", () => {
    it("should return longest possible sequence of 1s", () => {
      expect(flipBit(1775)).to.be.equal(8);
    });

    it("should return integer in binary length if all ones", () => {
      expect(flipBit(63)).to.be.equal(7);
    });
  });

  describe("#getNextArith()", () => {
    it("should return next biggest number with the same number of 1s", () => {
      expect(getNextArith(65536)).to.be.equal(131072);
    });
  });

  describe("#getPrevArith()", () => {
    it("should return next smallest number with the same number of 1s", () => {
      expect(getPrevArith(65536)).to.be.equal(32768);
    });
  });

  describe("#bitSwapRequired()", () => {
    it("should return number of flips to convert one int to another", () => {
      expect(bitSwapRequired(29, 15)).to.be.equal(2);
    });
  });

  describe("#swapOddEvenBits()", () => {
    it("should swap odd and even bits", () => {
      expect(swapOddEvenBits(21)).to.be.equal(42);
    });
  });
});
