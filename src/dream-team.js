

module.exports = function createDreamTeam(members) {
  let arr =[];
  if (Array.isArray(members) === false){
    return false;
  } else {
    for (let i =0; i < members.length; i++){
      if (typeof members[i] === 'string'){
        for (let j = 0; j < members[i].length; j++){
          if (members[i][j] !== ' '){
            arr.push(members[i][j].toUpperCase());
            break;
          }
        } 
      }
    }
  }
  return arr.sort().join('');
};
