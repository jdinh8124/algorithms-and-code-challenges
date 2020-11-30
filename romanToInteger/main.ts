// function romanToInt(s: string): number {
//     if (!s || s.length === 0) {
//         return 0;
//       }
    
//       const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
    
//       let i = s.length - 1;
//       let result = map.get(s[i]);
    
//       while (i > 0) {
//         const curr = map.get(s[i]);
//         const prev = map.get(s[i - 1]);
    
//         if (prev >= curr) {
//           result += prev;
//         } else {
//           result -= prev;
//         }
    
//         i--;
//       }
    
//       return result;
//     }

    function romanToInt(s: string): number {

    let res = 0;
    let map = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
        "IV" : 4,
        "IX" : 9,
        "XL" : 40,
        "XC" : 90,        
        "CD" : 400,
        "CM" : 900
    }
    for(let i = 0; i < s.length; i ++){
        if(i === s.length){
            res += map[s[i]];
            break;
        }
        let combine = s[i] + s[i + 1];
        if(map[combine]){
            res += map[combine];
            i ++;
            continue;
        }
        res += map[s[i]];
    }
    return res;
}