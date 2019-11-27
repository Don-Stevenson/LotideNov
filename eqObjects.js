// Function that compares two values and asserts whether they are the same or not

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log (`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log (`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected} 🟥🟥🟥`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get false!

const eqObjects = (object1, object2) => {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  } else {
    for (let value of key1) {
      if (Array.isArray(object1[value])) {
        if (!eqArrays(object1[value], object2[value])) {
          return false;
        }
      } else if (object1[value] !== object2[value]) {
        return false;
      }
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false