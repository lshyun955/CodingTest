function climbStairs(n: number): number {
    const t = [1, 2, 3];

    for (let i = 3; i < n; i++) {
        t[i] = t[i - 1] + t[i - 2];
    }

    return t[n - 1];
};