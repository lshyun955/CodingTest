function productExceptSelf(nums: number[]): number[] {
    const answer = Array.from({ length: nums.length }, () => 1);

    let prefix = 1;
    let suffix = 1;
    for (let i = 0; i < nums.length; ++i) {
        answer[i] *= prefix
        answer[nums.length - 1 - i] *= suffix;
        prefix *= nums[i]
        suffix *= nums[nums.length - 1 - i];
    }
    return answer;
};