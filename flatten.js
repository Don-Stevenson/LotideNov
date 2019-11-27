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

const flatten = (arr) => {
  const flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArr.push(arr[i][j]);
      }
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
};
flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);