// int fibonacci(int n) {
//     if (n == 0) {
//         printf("0");
//         return 0;
//     } else if (n == 1) {
//         printf("1");
//         return 1;
//     } else {
//         return fibonacci(n‐1) + fibonacci(n‐2);
//     }
// }

// N이 주어졌을 때, fibonacci(N)을 호출했을 때, 0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.



const fs = require("fs");

let [N, ...datas] = fs.readFileSync('./test.txt').toString().trim().split("\n").map(Number);


function solution(n) {
    const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 2 }, () => 0));
    dp[0] = [1, 0];
    dp[1] = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
        dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
    }

    return dp[n];
}


for (let j = 0; j < N; j++) {
    const [zero, one] = solution(datas[j]);
    console.log(zero, one);
}