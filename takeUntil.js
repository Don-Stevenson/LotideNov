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

// a function that uses a callback to return a new array from a parent array until a certain condition is met

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// //Expected output
// [1, 2, 5, 7, 2]
// ---
//   ['I\'ve', 'been', 'to', 'Hollywood']

assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);