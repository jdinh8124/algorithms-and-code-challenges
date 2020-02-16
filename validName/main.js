function validName(name) {
  const newArraySplit = name.split(" ");
  for (let i = 0; i < newArraySplit.length; i++) {
    if (newArraySplit[i].length === 1) {
      return false
    }
    else if (newArraySplit.length <= 1 || newArraySplit.length > 3) {
      return false
    }
    else if (newArraySplit[i].charCodeAt(0) > 97) {
        return false;
      }
    else if (newArraySplit[newArraySplit.length - 1].length <= 2) {
      return false;
    }
    else if (newArraySplit[i].length > 2 && newArraySplit[i][newArraySplit[i].length - 1] === ".") {
      return false;
    }
  }
  if (newArraySplit[0].length <= 2 && newArraySplit[1].length > 2 && newArraySplit[2]) {
    return false;
  }
  return true;
}
