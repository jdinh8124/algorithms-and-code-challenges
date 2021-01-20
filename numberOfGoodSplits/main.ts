function numSplits(s: string): number {
    let numOfGoodSplits = 0;

    for (let i = 1; i < s.length; i++) {
        if (new Set(s.substr(0, i)).size ===  new Set(s.substr(i)).size) {
            numOfGoodSplits++;
     }

    }
    return numOfGoodSplits;
};



// var numSplits = function(s) {
//     let set1 = new Set(), set2 = new Set();
//     let arr = [], res = 0;
//     for (let i = 0; i < s.length; i++) {
//         set1.add(s[i]);
//         arr[i] = set1.size;
//     }
//     for (let j = s.length-1; j > 0; j--) {
//         set2.add(s[j]);
//         if (arr[j-1] === set2.size) res++;
//     }
//     return res;