function coinChange(coins: number[], amount: number): number {
    const memo: Record<number, number> = {};

    function dfs(a: number): number {
        if (a === 0) return 0;
        if (a < 0) return Infinity;
        if (memo[a] !== undefined) return memo[a];
        
        let res = Infinity;

        for (const coin of coins) {
            res = Math.min(res, dfs(a - coin) + 1);
        }

        memo[a] = res;
        return res;
    }

    const answer = dfs(amount);
    return answer === Infinity ? -1 : answer;
};