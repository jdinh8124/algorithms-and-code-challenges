var luckyNumbers  = (matrix) => {
    let lucky = [];
    let lowest = 100000;
    let lowestIdx = 0;
    let isLucky = true;
    for (let i = 0; i < matrix.length; i++) {
       for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] < lowest) {
             lowest = matrix[i][j];
             lowestIdx = j;
          }
       }
       for (let k = 0; k < matrix.length; k++) {
          let test = matrix[k][lowestIdx];
          if (test > lowest) {
             isLucky = false;
          }
       }
       if (isLucky) {
          lucky.push(lowest);
       }
       lowest = 100000;
       isLucky = true;
    }
    return lucky;
 };