const fs = require("fs");

let [N, ...datas] = fs.readFileSync('./test.txt').toString().trim().split("\n").map(Number);

if (N === 1) {
    console.log(datas[0]);
} else {
    const dp = Array.from({ length: N }, () => 0);
    dp[0] = datas[0];
    dp[1] = datas[0] + datas[1];
    dp[2] = Math.max(datas[0] + datas[2], datas[1] + datas[2]);

    for (let i = 3; i < N; i++) {
        dp[i] = Math.max(dp[i-2] + datas[i], dp[i-3] + datas[i-1] + datas[i]);
    }
    console.log(dp[N-1]);
}