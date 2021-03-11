module.exports = function transform(arr) {
  if (!(Array.isArray(arr))) {    throw new Error();  } 
    let array = [];
  for (let i = 0; i < arr.length; i++){array.push(arr[i]);  }
  if (arr.length === 0) {
    return [];
  } else {
    for (let i = 0; i < array.length; i++){
      if (array[i] === '--discard-next'){ 
        if (i === array.length - 1){
          array.splice(i, 1);
        }
          if (array[i + 2] === '--double-prev' || array[i + 2] === '--discard-prev'){
            array.splice(i, 3);
        } else {
          array.splice(i, 2);
        }
      } if (array[i] === '--discard-prev'){
        if (i === 0){
          array.splice(i, 1);
        } else {
          array.splice(i -1, 2);
        }
      } if ( array[i] === '--double-next'){
        if (i === array.length - 1){
          array.splice(i, 1);
        } else {
          array.splice(i, 1, array[i + 1] );
        }
      } if (array[i] === '--double-prev') {
        if (i === 0) {
          array.splice(i, 1);
        } else {
          array.splice(i, 1, array[i - 1] );
        }
      }
    }
    
  }
  
 return array;
};