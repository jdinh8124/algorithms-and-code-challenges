function sudoku2(grid) {
  let found = false;

  let arrNum = 0;
  let index = 0;
  for (let i = 0; i < 81; i++) {
    if (parseInt(grid[arrNum][index])) {
      if (grid[arrNum][index] === grid[0][index] && arrNum ==! 0) {
            found = true;
          }
      else if (grid[arrNum][index] === grid[1][index] && arrNum ==! 1){
              found = true;
      } else if (grid[arrNum][index] === grid[2][index] && arrNum ==! 2){
              found = true;
        }
        else if (grid[arrNum][index] === grid[3][index] && arrNum ==! 3){
              found = true;
        }
        else if (grid[arrNum][index] === grid[4][index] && arrNum ==! 4){
              found = true;
        }
        else if (grid[arrNum][index] === grid[5][index] && arrNum ==! 5){
              found = true;
        }
        else if (grid[arrNum][index] === grid[6][index] && arrNum ==! 6){
              found = true;
        }
        else if (grid[arrNum][index] === grid[7][index] && arrNum == !7){
              found = true;
        }
        else if (grid[arrNum][index] === grid[8][index] && arrNum == !8){
              found = true;
        }
    }

    if (index === 8) {
      arrNum++
      index = 0;
    } else {
      index++;
    }
  }

  let arrayLoop = 0;
  let newIndex = 0;
  let objToCheck = {};
  for (let i = 0; i < 81; i++) {
    if (objToCheck.hasOwnProperty(grid[arrayLoop][newIndex])) {
      return false;
    }
    if (parseInt(grid[arrayLoop][newIndex])) {
      objToCheck[grid[arrayLoop][newIndex]] = grid[arrayLoop][newIndex]
    }
    if (newIndex === 8) {
      newIndex = 0;
      arrayLoop++;
      objToCheck = {};
    } else {
      newIndex++
    }
  }


  if (found) {
    return false;
  } else {
    return true;
  }
}
console.log(sudoku2(
[["1", ".", "4", ".", ".", ".", "6", "3", "."],
["1", ".", ".", ".", ".", ".", ".", ".", "."],
["5", ".", ".", ".", ".", ".", ".", "9", "."],
[".", ".", ".", "5", "6", ".", ".", ".", "."],
["4", ".", "3", ".", ".", ".", ".", ".", "1"],
[".", ".", ".", "7", ".", ".", ".", ".", "."],
[".", ".", ".", "5", ".", ".", ".", ".", "."],
[".", ".", ".", ".", ".", ".", ".", ".", "."],
[".", ".", ".", ".", ".", ".", ".", ".", "."]]))
