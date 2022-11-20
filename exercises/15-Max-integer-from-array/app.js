let myArray = [43, 23, 6, 87, 43, 1, 4, 6, 3, 67, 8, 3445, 3, 7, 5435, 63, 346, 3, 456, 734, 6, 34];

/**
 * 
 * @param {Array} array 
 */
function findMaxNumber(array) {
  let actualMax = 0;

  array.forEach(item => item > actualMax ? actualMax = item : null);

  return actualMax;
}

console.log(findMaxNumber(myArray));