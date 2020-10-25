function countRepetitions(arr) {
    const objToCount = {}
    arr.map((item) => {
        if (objToCount[item]) {
            objToCount[item] = objToCount[item] + 1
        } else {
            objToCount[item] = 1;
        }
    })

    const sortableArr = Object.fromEntries(Object.entries(objToCount).sort(([,a], [,b]) => b-a));

    return sortableArr;
}