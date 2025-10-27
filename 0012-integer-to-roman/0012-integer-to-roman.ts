function intToRoman(num: number): string {
    let result: string = '';
    const symbols: Record<number, string> = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };

    const keys = Object.keys(symbols)
        .map(Number)
        .sort((a, b) => b - a);

    for (const key of keys) {
        while (num >= key) {
            result += symbols[key];
            num -= key;
        }
    }

    return result;
    
};