// Function that compares two values and asserts whether they are the same or not

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log (`✅✅✅ Assertion Passed: + ${actual} + === ${expected} ✅✅✅`);
  } else {
    console.log (`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected} 🟥🟥🟥`);
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// function that returns the key when the value has been given

const findKeyByValue = (object, value) => {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);