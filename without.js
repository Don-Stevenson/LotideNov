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
const assertArraysEqual = (arrOne, arrTwo) =>{
  if (eqArrays(arrOne, arrTwo)) {
    console.log (`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo} ✅✅✅`);
  } else {
    console.log (`🟥🟥🟥 Assertion Failed: ${arrOne} !== ${arrTwo} 🟥🟥🟥`);
  }
};

// function that removes unwanted items and removes them from the array

const without = (source, itemsToRemove) => {
  let newArr = [];
  for (let item of source) {
    // console.log('item =', item);
    if (!itemsToRemove.includes(item)) {
      // console.log('we want to keep item', item)
      newArr.push(item);
    }
  }
  return newArr;
};

// const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);