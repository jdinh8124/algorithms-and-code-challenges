function isValid(s: string): boolean {
    const stack = [];
    const openMap = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
      ]);
      const closeMap = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
      ]);

    for (let i = 0; i < s.length; i++) {
        if (openMap.get(s[i])) {
            stack.push(s[i])
        } else {
            let popped = stack.pop();

            if (popped !== closeMap.get(s[i])) {
                return false 
            }
        }
    }
        
    return stack.length === 0;
};