let arr = [];
let catSum = 0;

module.exports = function countCats(matrix) {
  arr = matrix.flat();
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === '^^'){
      catSum += 1;
    } 
  }
  return catSum;
};
