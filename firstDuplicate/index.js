function firstDuplicate(a) {
  let found = {}
  for (let i = 0; i < a.length; i++) {
    if (found.hasOwnProperty(a[i])) {
      return a[i]
    } else {
      found[a[i]] = [a[i]];
    }
  }
  return -1;
}
