function rob(nums: number[]): number {
    let prev2 = 0; // dp[i-2]
    let prev1 = 0; // dp[i-1]

    for (let x of nums) {
        const cur = Math.max(prev1, prev2 + x);
        prev2 = prev1;
        prev1 = cur;
    }

  return prev1;
};