// function that compares if two arrays are the same
const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } for (let i = 0; i < arrTwo.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

//Function that asserts if two arrays are equal to one another
const assertArraysEqual = (arrOne, arrTwo) => {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: + ${arrOne} + === ${arrTwo} ✅✅✅`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: ${arrOne} !== ${arrTwo} 🟥🟥🟥`);
  }
};



// function that takes in an array and manipulates it and returns an new arrary with the modified contents

// const words = ["ground", "control", "to", "major", "tom"];
// const words2 = ["commencing", "engine" , "count", "down's", "on"]
const words3 = ['goodbye', 'cruel', 'world'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words3, word => word[0]);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
// assertArraysEqual(results1, ['c', 'e', 'c', 'd', 'o'])
assertArraysEqual(results1, ['g', 'c', 'w']);