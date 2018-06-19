# Cracking the Coding Interview

Cracking the Coding Interview 6th edition solutions with unit testing.

## Brief description

All the solutions are written in cutting edge ES6+ ([ES8+](https://www.ecma-international.org/publications/standards/Ecma-262.htm) at the time of coding) in [Node.js](https://nodejs.org/en/). Testing is done via [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/). Sometimes there will be more than one solution - I will add some **ninja functional chaining and parsing** where possible.

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
