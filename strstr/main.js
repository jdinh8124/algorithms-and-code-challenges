function strstr(s, x) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === x[0]) {
      let newSlice = s.slice(i, (i + s.length));
      if (newSlice === x) {
        return i;
      }
    }
  }


  return -1;
}

console.log(strstr("CodefightsIsAwesome", "ISA"))
