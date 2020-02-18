function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    let firstHalf = s.slice(0, i);
    let secondHalf = s.slice(i + 1);
    let removed = firstHalf + secondHalf;
    if (!removed.includes(s[i])) {
      return s[i];
    }

  }
  return '_'
}
