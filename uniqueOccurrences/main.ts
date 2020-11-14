function uniqueOccurrences(arr: number[]): boolean {
    let objToCheck : {[key: number]: number} = {}

    for (let i = 0; i <arr.length; i++) {
        if (objToCheck[arr[i]] === undefined) {
            objToCheck[arr[i]] = 1;
        } else {
            objToCheck[arr[i]] += 1;
        }
    }
    const values = Object.values(objToCheck)
    
    objToCheck = {}
    for (let i = 0 ; i < values.length; i++) {
        if (objToCheck[values[i]] === undefined) {
            objToCheck[values[i]] = 1;
        } else {
            return false;
        }    
    }
    
    return true;

//     const values = Object.values(objToCheck).sort((a,b) => a-b)
//    for (let i = 0 ; i < values.length; i++) {
//         if(values[i]===values[i+1]) return false;
//     }
//     return true;
};