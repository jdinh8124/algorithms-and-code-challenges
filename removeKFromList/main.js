//
function removeKFromList(l, k) {
  debugger;
  if (l.length < 1) {
    return l;
  }
  for (let i = 0; i < l.length; i++) {
    if (l[i] === k) {
      l.splice(i, 1);
      i--
    }
  }
  return l;
}

console.log(removeKFromList([], 3))
