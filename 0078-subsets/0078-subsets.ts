function subsets(nums: number[]): number[][] {
    const answer = [];

    function backtrack(start: number, path: number[]): void {
        answer.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);

            backtrack(i + 1, path);

            path.pop();
        }
    }

    backtrack(0, []);

    return answer;
};