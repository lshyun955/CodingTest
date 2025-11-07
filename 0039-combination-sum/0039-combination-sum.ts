function combinationSum(candidates: number[], target: number): number[][] {
    const answer = [];
    function backtrack(start: number, sum: number, comb: number[]): void {
        if (sum === 0) {
            answer.push([...comb]);
        }
        if (sum < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            comb.push(candidates[i]);

            backtrack(i, sum - candidates[i], comb);

            comb.pop();
        }
    }

    backtrack(0, target, []);

    return answer;
};