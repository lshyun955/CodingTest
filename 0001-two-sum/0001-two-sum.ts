function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const lastIdx = nums.findLastIndex((num) => num === complement);
        if (nums.includes(target - nums[i]) && i !== lastIdx) {
            return [i, lastIdx];
        }
    }

    return [];
};