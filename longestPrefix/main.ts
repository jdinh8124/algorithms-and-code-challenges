// function longestCommonPrefix(strs: string[]): string {
//     if (strs.length === 0){
//         return '';
//     }
//     let stringToReturn = "";

//     for (let i = 0; i < strs[0].length; i++) {
//         for (let j = 1; j < strs.length; j++) {
//             if (strs[j][i] !== strs[j - 1][i]) {
//                 return stringToReturn;
//             }
//         }
//             stringToReturn += strs[0][i];
//     }

//     return stringToReturn;
// };

const longestCommonPrefix = (strs: string[]): string => {
    if (strs && strs.length > 0) {
      let prefix: string = strs[0];
      for (let i = 1; i < strs.length; i++) {
        let subStr = strs[i];
        while (subStr.indexOf(prefix) !== 0) {
          prefix = prefix.slice(0, prefix.length - 1);
          if (prefix.length == 0) {
            return "";
          }
        }
      }
      return prefix;
    } else {
      return "";
    }