const args = process.argv.slice(2);
// console.log(args);

const sumOfNums = (args) => {
  let sum = 0;
  for (let item in args) {
    sum += parseInt(args[item]);
  }
  return sum;
};
console.log(sumOfNums(args));
