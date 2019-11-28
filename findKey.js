// Function that compares two values and asserts whether they are the same or not

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected} 🟥🟥🟥`);
  }
};


// function that uses a callback to find a key that matches a given condition

const findKey = function(object, callback) {
  let result = Object.keys(object);
  for (let item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
};

// test of findKey

result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result, 'noma');