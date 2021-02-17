function halvesAreAlike(s: string): boolean {
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (let i = 0; i < s.length / 2; i++) {
        if (vowelsArray.includes(s[0 + i].toLowerCase())) {
            count++;
        }
        
        if (vowelsArray.includes(s[s.length / 2 + i].toLowerCase())) {
            count--;
        }
    } 
        return count === 0;
};