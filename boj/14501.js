const fs = require("fs");

const [NUMBER, ...datas] = fs.readFileSync('./test.txt').toString().trim().split("\n");
const newDatas = datas.map(d => d.split(' ').map(Number));
const newNumber = +NUMBER;
const dp = Array.from({ length: newNumber + 1}, () => -1);


function recur (idx) {
    if (idx - 1 === newNumber - 1) return 0;
    if (idx - 1 > newNumber - 1) return Number.MIN_SAFE_INTEGER;
    if (dp[idx] !== -1) return dp[idx];

    dp[idx] = Math.max(recur(idx + newDatas[idx][0]) + newDatas[idx][1], recur(idx + 1));

    return dp[idx];
}

console.log(recur(0));