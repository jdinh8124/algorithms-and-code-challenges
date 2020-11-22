// function isPalindrome(s: string): boolean {
//     const split = s.split('')
//     for (let i = 0; i < split.length; i++) {
//         if (parseInt(split[i]) >= 0) {
//             continue
//         }
//         else if (split[i].toLowerCase() == split[i].toUpperCase() ) {
//             split.splice(i, 1)
//             i--
//         } else if(split[i] === split[i].toUpperCase()) {
//             split[i] = split[i].toLowerCase();
//         }
//     }

//     for (let i = 0; i < split.length / 2; i++) {
//         if (split[i] !== split[split.length - 1 - i ]) {
//             return false;
//         }
//     }
//      return true;
// };


function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
      if (s.charAt(i) !== s.charAt(j)) return false;
    }
    return true;
  }