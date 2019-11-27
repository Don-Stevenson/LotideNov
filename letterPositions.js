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

// function that, in an object, logs the indices of that particular letter from a phrase has occured.
 
const letterPositions = function(sentence) {
  const results = {};
  let joinPhrase = sentence.split(' ').join('');
  for (i = 0; i < joinPhrase.length; i++){
    if (results[joinPhrase[i]]) {
      results[joinPhrase[i]].push(i)
    } else {
      results[joinPhrase[i]]= [i];
    }
  }
  return results;
};
letterPositions("hi");
console.log(letterPositions("hello world"));
// console.log(assertArraysEqual(letterPositions("hello").e, [1]));