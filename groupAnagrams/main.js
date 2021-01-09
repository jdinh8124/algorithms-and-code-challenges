// function groupAnagrams(strs){    
//     const arrToReturn = [];
//     const objToCheck = {};

//     strs.forEach((str) => {
//         const sorted = str.split('').sort().join('');
//         if (objToCheck[sorted]) {
//             objToCheck[sorted].push(str)
//         } else {
//             objToCheck[sorted] = [str];
//         }
//     })

//     for (const prop in objToCheck) {
//         arrToReturn.push(objToCheck[prop]);
//     }

//     return arrToReturn;
// };


let groupAnagrams = function(strs) {
    let map = new Map();
        for(let s of strs){
            let res = s.split("").sort().join("");
            if(!map.get(res)){
                map.set(res, []);
            } 
            map.get(res).push(s);
        }
        return Array.from(map.values());
    }