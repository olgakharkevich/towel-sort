
// You should implement your task here.

module.exports = function towelSort (matrix) {
  function _arraynotempty(array){
    if (! Array.isArray(array)) {
      return false;
    }
    else if (array.length) {
      return true
    }
    return false;
  }
  if (_arraynotempty(matrix)) {
    let i = 1;
    let res = [];
    matrix.forEach(element => {
      if (i%2 == 0) {
        res = res.concat(matrix[i-1].reverse());
        i++;
      } else {
        res = res.concat(matrix[i-1]);
        i++;
      }
    });
    return res;
  }
  return [];
 }
