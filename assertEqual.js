// Function that compares two values and asserts whether they are the same or not

const assertEqual = function(actual, expected) {
 if (actual === expected){
   console.log (`✅✅✅ Assertion Passed:${actual} === ${expected} ✅✅✅`);
 } else { 
  console.log (`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected} 🟥🟥🟥`);
 }
};

module.exports = assertEqual;