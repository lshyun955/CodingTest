const fs = require("fs");

const [N, ...datas] = fs.readFileSync('./test.txt').toString().trim().split("\n");
const newDatas = datas.map(v => v.split(' ').map(Number));
// 조합 nCr = n! / r!(n-r)!
const factorial = (num) => {
    if (num === 0) return 1;
    return BigInt(num) * BigInt(factorial(num - 1));
}

for (let i = 0; i < N; i++) {
    const n = Math.max(newDatas[i][0], newDatas[i][1]);
    const r = Math.min(newDatas[i][0], newDatas[i][1]);
     console.log((BigInt(factorial(n)) / (BigInt(factorial(r)) * BigInt(factorial(n - r)))).toString());
}