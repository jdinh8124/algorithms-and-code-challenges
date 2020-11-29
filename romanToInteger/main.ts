function romanToInt(s: string): number {
    let numToReturn = 0;
    for (let i = 0; i < s.length; i++) {
        numToReturn += romanValue(s[i])
    }
    return numToReturn
};



function romanValue(letter :string): number {
    switch(letter) {
        case 'I':             
        return 1;
        case 'V':
        return 5
        case 'X':   
        return 10
        case 'L':
        return 50
        case 'C':
        return 100;
        case 'D':
        return 500;
        case 'M':
        return 1000;    
    }
}