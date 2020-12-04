// function maxNumberOfBalloons(text) {
//     const textArr = text.split('');
//     let numberOfTimes = 0;
//     let search = 0;
//     let balloons =  ["b","a","l","l","o","o","n"];
//     while(search !== textArr.length) {
//         const foundIndex = balloons.findIndex((letter ) => letter === textArr[search])
//         console.log(numberOfTimes,search, balloons, textArr);

//         if (foundIndex > -1) {
//             textArr.splice(search, 1);
//             balloons.splice(foundIndex, 1);
//             search = 0;
//         } else {
//             search++
//         }

//         if (balloons.length === 0) {
//             numberOfTimes++;
//             balloons =  ["b","a","l","l","o","o","n"];
//         }
//     }



//     return numberOfTimes;
// };

// const maxNumberOfBalloons = text => {
//     let obj = {}, balloonCount = 0;
//     for (let el of text) {
//       obj[el] = (obj[el] || 0) + 1;
//     }
//     while (obj['a'] > 0 && obj['b'] >0 && obj['l']>1 && obj['n']>0 && obj['o']>1) {
//       balloonCount++;
//       obj['a']--;
//       obj['b']--;
//       obj['l'] -= 2;
//       obj['n']--;
//       obj['o'] -= 2;
//     }
//     return balloonCount;
//   }

var maxNumberOfBalloons = function(text) {
    const counts = { b: 0, a: 0, l: 0, o: 0, n: 0 };
    
    // count characters that are in "balloon"
    for (let i = 0; i < text.length; i++) {
      if (text[i] in counts) {
        counts[text[i]]++;
      }
    }
    
    // minimum based on counts of each letter, 2xL and 2xO required for a single instance of balloon
    return Math.min(counts.b, counts.a, Math.floor(counts.l / 2), Math.floor(counts.o / 2), counts.n);
  };