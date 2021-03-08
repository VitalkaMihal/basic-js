const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let arr = matrix.flat();
  let catSum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === '^^'){
      catSum += 1;
  } 
}
return catSum;
};
