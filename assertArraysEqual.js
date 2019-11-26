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

