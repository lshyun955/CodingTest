/**
 * [DP]
 * 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다.
 * 1+1+1+1
 * 1+1+2
 * 1+2+1
 * 2+1+1
 * 2+2
 * 1+3
 * 3+1
 * 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.
 */
const fs = require("fs");

let [_, ...datas] = fs.readFileSync('./test.txt').toString().trim().split("\n").map(Number);

function countWays(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // 0을 만드는 방법은 1가지 (아무것도 선택하지 않는 것)

    for (let i = 1; i <= n; i++) {
        if (i - 1 >= 0) dp[i] += dp[i - 1];
        if (i - 2 >= 0) dp[i] += dp[i - 2];
        if (i - 3 >= 0) dp[i] += dp[i - 3];
    }
    console.log(dp)
    return dp[n];
}

for (let i = 0; i < datas.length; i++) {
    console.log(countWays(datas[i]));
}