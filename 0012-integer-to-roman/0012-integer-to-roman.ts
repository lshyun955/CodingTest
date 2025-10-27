function intToRoman(num: number): string {
    const thousands = ["", "M", "MM", "MMM"];
    const hundreds  = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens      = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const ones      = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return thousands[Math.floor(num / 1000)] +
           hundreds[Math.floor((num % 1000) / 100)] +
           tens[Math.floor((num % 100) / 10)] +
           ones[num % 10];
};