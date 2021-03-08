
module.exports = function countCats(matrix) {
  let arr = matrix.flat();
  let catSum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === '^^'){
      catSum += 1;
  } 
}
return catSum;
};
