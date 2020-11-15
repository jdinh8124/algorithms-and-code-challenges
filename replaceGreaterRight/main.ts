function replaceElements(arr: number[]): number[] {
    if (arr.length === 1) {
        arr[0] = -1
        return arr
    }
    let greatest = -1;
    arr.push(-1);

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === 0 && greatest > arr[i]) {
            arr.shift()
            continue
        }

        if (greatest > arr[i]) {
            arr[i] = greatest
        } else {
            greatest = arr[i];
        }
    }    

    return arr;
};