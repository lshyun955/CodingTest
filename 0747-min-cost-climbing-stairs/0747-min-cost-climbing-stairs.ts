function minCostClimbingStairs(cost: number[]): number {
    const memo: Record<number, number> = {};

    function dp(i: number): number {
        if (i <= 1) return 0;
        if (memo[i] !== undefined) return memo[i];

        const oneStep = dp(i - 1) + cost[i - 1];
        const twoStep = dp(i - 2) + cost[i - 2];

        memo[i] = Math.min(oneStep, twoStep);
        return memo[i];
    }

    return dp(cost.length);
};