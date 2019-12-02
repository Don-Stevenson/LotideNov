const eqArrays = require('../eqArrays');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse!", "Labs"]);
eqArrays(result, ["Lighthouse!", "Labs"]); // => will always fail!