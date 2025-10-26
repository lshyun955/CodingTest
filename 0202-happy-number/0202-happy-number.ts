function isHappy(n: number): boolean {
    const seen: Record<number, boolean> = {};

    while (!seen[n] && n !== 1) {
        seen[n] = true;
        n = getSumDigitSquare(n);
    }

    return n === 1;
};

function getSumDigitSquare(num: number): number {
    let sum: number = 0;

    while(num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, 2);
        num = Math.floor(num / 10);
    }

    return sum;
}


// 19 -> 1 + 81 = 82 -> 64 + 4 = 68 -> 36 + 64 = 100 -> 1 + 0 + 0 = 1
// { 82: true, 68: true, 100: true }
