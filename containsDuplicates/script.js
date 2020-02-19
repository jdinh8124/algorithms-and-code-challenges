function containsDuplicates(a) {
  const objectToCheck = {};
  for (let i = 0; i < a.length; i++) {
    if (objectToCheck.hasOwnProperty(a[i])) {
      return true;
    }
    objectToCheck[a[i]] = a[i];
  }
  return false;
}
