function isPalindrome(x: number): boolean {
    return x.toString() === x.toString().split('').reverse().join('');
    };

// This second function doesn't take up space storing into arrays 
    // function isPalindrome(x: number): boolean {
    //     if(x < 0) {
    //         return false
    //     }
        
    //     let reversed = 0, y = x
        
    //     while (y > 0) {
    //         const last = y % 10;
    //         reversed = (reversed * 10 ) + last;
    //         y = (y/10) | 0
    //     }
        
    //     return x === reversed
    // };