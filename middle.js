//function that gets the middle of the array

const middle = (array) => {
   if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    let middleNo = array.length / 2 ;
    return [array[Math.floor(middleNo)]];
  } else {
    let middleNo = array.length / 2 ;
    return [array[middleNo - 1], array[middleNo]];
  }
}

module.exports = middle;