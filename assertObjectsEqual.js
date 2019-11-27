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

// function that asserts if two objects are equal
const assertObjectsEqual = (actual, expected) =>{
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);

  if (eqObjects(actual, expected)){
    console.log (`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅✅✅`);
  } else {
   console.log (`🟥🟥🟥 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🟥🟥🟥`);
  }
 };


const cd = { c: "2", d: ["2", 3] };
const dc = { d: ["2", 3], c: "2" };
assertObjectsEqual(cd, dc); // => true
