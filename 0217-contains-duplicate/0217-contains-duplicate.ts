function containsDuplicate(nums: number[]): boolean {
    const compareLength = [...new Set(nums)].length;

    return nums.length !== compareLength;
};