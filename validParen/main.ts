function isValid(s: string): boolean {
    const stack = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
        if (stack.length) {
            if (s[i] === ']' || s[i] === ')' || s[i] === '}') {
                if (stack[stack.length - 1])
            } else {
                if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
                    stack.push(s[i])
                } else {
                    return false;
                }
            }
        } else if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
            stack.push(s[i])
        } else {
            return false;
        }
    }
        
    return stack.length === 0;
};