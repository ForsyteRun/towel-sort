
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let resArray = [];
    if(matrix){
      matrix.forEach((el, index) => {
        index%2 ? resArray.push(el.reverse()) : resArray.push(el)  
      });
    } else return resArray
  
    return resArray.flat()
  }
