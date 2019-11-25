// Function that compares two values and asserts whether they are the same or not

const assertEqual = function(actual, expected) {
  if (Array.isArray(actual)) {
    for (let i = 0; i < actual.length; i++) {
       if (actual[i] !== expected[i]){
         return console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
       } 
    }
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Tail function: Returns the end values from an array, removing the first element;
const tail = (array) => {
  return array.slice(1);
 };

//  // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


const result = tail(["Hello", "Lighthouse!", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!



