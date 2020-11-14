function uniqueOccurrences(arr: number[]): boolean {
    const objToCheck = {}

    for (let i = 0; i <arr.length; i++) {
        if (objToCheck[arr[i]]) {
            objToCheck[arr[i]] = 1;
        } else {
            objToCheck[arr[i]] += 1;
        }
    }

    
};