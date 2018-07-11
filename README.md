# Cracking the Coding Interview (ES6+)

[Cracking the Coding Interview 6th edition](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850) solutions with unit testing in ECMAScript2015+.

## Brief description

* Solutions to chapters 1-4, 8 and 10 are written mostly in cutting edge ES6+ (almost [ES9](https://www.ecma-international.org/publications/standards/Ecma-262.htm) at the time of coding) in [Node.js](https://nodejs.org/en/) with a goal to do as little lines of code and as many functional chaining as possible.
* Chapter 5 is an exact rip-off of [Java code](https://github.com/careercup/CtCI-6th-Edition), because bit manipulation is rarely used in JS and does not have ES6+ improvements.
* Chapter 7 is still work-in-progress because there is a lot of new object-related syntax in ES6+ and usually there is also multiple files and hundreds of lines of code in a single solution
* Chapters 6, 9 and 11 are mostly theoretical, so there's no code nor unit testing for them, yet I'd like to add some kind of solutions to them in the future.
* Testing is done via [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/).

### Prerequisites

If you want to make some changes, first you have to have [node with npm](https://nodejs.org/en/) installed.

### Installation

After cloning this repository, in the project directory, you have to install dependencies:

```
npm i
```

Then you can run:

```
npm test
```

To run all the available [Mocha](https://mochajs.org/)/[Chai](http://www.chaijs.com/) tests. While running separate files, remember that most of them use **ES6+ syntax** (most notably import/export statements) that will cause an error in Node. On the other hand, tests in Mocha are using [Babel](https://babeljs.io/) flag, so they all run without any issues.

## Further work

* Basic UI in terminal (later some pretty React stuff in the browser)
* First, I'd like to do all of the solutions and testing on my own, but as soon as I get there, I would fork ES6+ folder in the [Official CtCI 6th Edition Repo](https://github.com/careercup/CtCI-6th-Edition) and submit my changes, because their solutions consist of only a few chapters and it wasn't even updated for a year.

## Acknowledgements

* Every question and most of the solutions here are of course intellectual property of [Gayle Laakmann McDowell](https://www.amazon.com/default/e/B004BI1ZUQ/ref=dp_byline_cont_pop_book_1?redirectedFromKindleDbs=true) who is the author of this amazing bible of technical interviews knowledge
* Special thanks to [MPJ](https://github.com/mpj) for showing me how classes doesn't exist in JS and how to write Object-Oriented JavaScript with all this ES6 syntactic sugar
