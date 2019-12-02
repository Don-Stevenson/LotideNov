const eqArrays = require('../eqArrays');
const tail = require('../tail');

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
   eqArrays(tail([1, 2, 3]), 3);
  });
});




// const result = tail(["Hello", "Lighthouse!", "Labs"]);
// eqArrays(result, ["Lighthouse!", "Labs"]); // => will always fail!