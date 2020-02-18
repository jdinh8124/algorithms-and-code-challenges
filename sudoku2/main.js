function sudoku2(grid) {
  let found = false;

  let arrNum = 0;
  let index = 0;
  for (let i = 0; i < 81; i++) {
    if (parseInt(grid[arrNum][index])) {
      if (grid[arrNum][index] === grid[0][index] && arrNum == !0) {
        found = true;
      }
      else if (grid[arrNum][index] === grid[1][index] && arrNum !== 1) {
        found = true;
      } else if (grid[arrNum][index] === grid[2][index] && arrNum !== 2) {
        found = true;
      }
      else if (grid[arrNum][index] === grid[3][index] && arrNum !== 3) {
        found = true;
      }
      else if (grid[arrNum][index] === grid[4][index] && arrNum !== 4) {
        found = true;
      }
      else if (grid[arrNum][index] === grid[5][index] && arrNum !== 5) {
        found = true;
      }
      else if (grid[arrNum][index] === grid[6][index] && arrNum !== 6) {
        found = true;
      }
      else if (grid[arrNum][index] === grid[7][index] && arrNum !== 7) {
        found = true;
      }
      else if (grid[arrNum][index] === grid[8][index] && arrNum !== 8) {
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


  let newArrayLoop = 0;
  let lastNewIndex = 0;
  let newObjToCheck1 = {};
  let newObjToCheck2 = {};
  let newObjToCheck3 = {};


  for (let i = 0; i <= 81; i++) {
    debugger;
    if (newObjToCheck1.hasOwnProperty(grid[newArrayLoop][lastNewIndex]) || newObjToCheck2.hasOwnProperty(grid[newArrayLoop][lastNewIndex]) || newObjToCheck3.hasOwnProperty(grid[newArrayLoop][lastNewIndex])) {
      return false;
    }
    if (parseInt(grid[newArrayLoop][lastNewIndex])) {
      if (lastNewIndex < 3) {
        newObjToCheck1[grid[newArrayLoop][lastNewIndex]] = grid[newArrayLoop][lastNewIndex]
      } else if (lastNewIndex >= 3 && lastNewIndex < 6) {
        newObjToCheck2[grid[newArrayLoop][lastNewIndex]] = grid[newArrayLoop][lastNewIndex]
      } else {
        newObjToCheck3[grid[newArrayLoop][lastNewIndex]] = grid[newArrayLoop][lastNewIndex]
      }
    }
    if (lastNewIndex === 8) {
      lastNewIndex = 0;
      newArrayLoop++;
    } else {
      lastNewIndex++
    }
    if (i === 26 || i === 52) {
      newObjToCheck1 = {};
      newObjToCheck2 = {};
      newObjToCheck3 = {};
    }
  }




  if (found) {
    return false;
  } else {
    return true;
  }
}
console.log(sudoku2(
  [[".", "4", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "1", ".", ".", "7", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "3", ".", ".", ".", "6", "."],
    [".", ".", ".", ".", ".", "6", ".", "9", "."],
    [".", ".", ".", ".", "1", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "8", ".", ".", ".", ".", "."]]))
