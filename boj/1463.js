const fs = require("fs");

const number = Number(fs.readFileSync('./test.txt').toString().trim());

const dp = Array(number + 1).fill(0);


for (let i = 2; i <= number; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}


console.log(dp[number]);