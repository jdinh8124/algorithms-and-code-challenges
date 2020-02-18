function sudoku2(grid) {
  let found = false;
  let arrNum = 0;
  let index = 0;
  let arrayLoop = 0;
  let newIndex = 0;
  let objToCheck = {};
  let newArrayLoop = 0;
  let lastNewIndex = 0;
  let newObjToCheck1 = {};
  let newObjToCheck2 = {};
  let newObjToCheck3 = {};
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

    if (parseInt(grid[newArrayLoop][lastNewIndex])) {
      if (lastNewIndex < 3) {
        if (newObjToCheck1.hasOwnProperty(grid[newArrayLoop][lastNewIndex])) {
          return false
        }
        newObjToCheck1[grid[newArrayLoop][lastNewIndex]] = grid[newArrayLoop][lastNewIndex]
      } else if (lastNewIndex >= 3 && lastNewIndex < 6) {
        if (newObjToCheck2.hasOwnProperty(grid[newArrayLoop][lastNewIndex])) {
          return false
        }
        newObjToCheck2[grid[newArrayLoop][lastNewIndex]] = grid[newArrayLoop][lastNewIndex]
      } else {
        if (newObjToCheck3.hasOwnProperty(grid[newArrayLoop][lastNewIndex])) {
          return false
        }
        newObjToCheck3[grid[newArrayLoop][lastNewIndex]] = grid[newArrayLoop][lastNewIndex]
      }
    }
    if (lastNewIndex === 8) {
      lastNewIndex = 0;
      newArrayLoop++;
    } else {
      lastNewIndex++
    }
    if (i === 26 || i === 53) {
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
