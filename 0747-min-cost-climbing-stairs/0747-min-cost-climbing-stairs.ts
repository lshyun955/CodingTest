function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;

    let prev1 = 0;
    let prev2 = 0;

    for (let i = 2; i < n + 1; i++) {
        const cur = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
        prev2 = prev1;
        prev1 = cur;
    }

    return prev1;
};