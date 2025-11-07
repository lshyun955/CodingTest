function coinChange(coins: number[], amount: number): number {
   const dp = new Array(amount + 1).fill(Infinity);
   dp[0] = 0;

   for (let i = 1; i < amount + 1; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
   }

   const answer = dp[amount];

   return answer === Infinity ? -1 : answer;
};