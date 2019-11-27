// Function that compares two values and asserts whether they are the same or not

const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log (`✅✅✅ Assertion Passed: + ${actual} + === ${expected} ✅✅✅`);
  } else {
   console.log (`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected} 🟥🟥🟥`);
  }
 };
// function to count the letters in a phrase/ string
 const countLetters = function(phrase) {
  let results = {};
  let joinPhrase = phrase.split(' ').join('');
  for (let item of joinPhrase) {
    if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  // console.log(results);
  return results;
 }

 const testPhrase = "lighthouse in the house";
 console.log(countLetters(testPhrase));