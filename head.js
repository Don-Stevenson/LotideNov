// Function that compares two values and asserts whether they are the same or not

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed: + ${actual} !== ${expected}`);
  }
};

// Head function: Returns the first value from an array;

const head = (input) => {
  return input[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");