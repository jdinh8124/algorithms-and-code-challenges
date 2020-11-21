function plusOne(digits) {
    addOne(digits.length - 1) 

    function addOne(index) {
        if (index === 0 && digits[index] === 9) {
            digits.unshift(0)
        } 

        if (digits[index] === 9) {
            addOne(index - 1)
        } else if (index === 0 && digits[index] !== 0 && digits.length > 1) {
            digits[index] = digits[index] +1
            addOne(index + 1)
        } 
        else {
            digits[index] = digits[index] +1
            return;
        }
    }

    return digits;
};


plusOne([9])