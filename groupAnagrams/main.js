function groupAnagrams(strs){    
    const arrToReturn = [];
    const objToCheck = {};

    strs.forEach((str) => {
        const sorted = str.split('').sort().join('');
        debugger
        if (objToCheck[sorted]) {
            objToCheck[sorted].push(str)
        } else {
            objToCheck[sorted] = [str];
        }
    })

    for (const prop in objToCheck) {
        arrToReturn.push(objToCheck[prop]);
    }

    return arrToReturn;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))