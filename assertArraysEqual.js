const eqArrays = require('./eqArrays');

//Function that asserts if two arrays are equal to one another
const assertArraysEqual = (arrOne, arrTwo) => {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: + ${arrOne} + === ${arrTwo} ✅✅✅`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: ${arrOne} !== ${arrTwo} 🟥🟥🟥`);
  }
};

module.exports = assertArraysEqual;