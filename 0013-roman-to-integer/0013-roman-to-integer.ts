function romanToInt(s: string): number {
    const symbols: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let sum = 0;
    let prev;
    for (let i = 0; i < s.length; i++) {
         if (prev && prev < symbols[s[i]]) {
            sum = sum - prev + (symbols[s[i]] - prev);
         } else {
            sum += symbols[s[i]];
         }

         prev = symbols[s[i]];
    }
    
    return sum;
};