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
  if (eqArrays(arrOne, arrTwo)){
    console.log (`✅✅✅ Assertion Passed: + ${arrOne} + === ${arrTwo} ✅✅✅`);
  } else {
   console.log (`🟥🟥🟥 Assertion Failed: ${arrOne} !== ${arrTwo} 🟥🟥🟥`);
  }
 };

//function that gets the middle of the array

const middle = (array) => {
   if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    let middleNo = array.length / 2 ;
    return [array[Math.floor(middleNo)]];
  } else {
    let middleNo = array.length / 2 ;
    return [array[middleNo - 1], array[middleNo]];
  }
}

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]