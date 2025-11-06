function robLinear(nums: number[], left: number, right: number): number {
  let prev2 = 0; 
  let prev1 = 0;
  for (let i = left; i <= right; i++) {
    const cur = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = cur;
  }
  return prev1;
}

function rob(nums: number[]): number {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    const case1 = robLinear(nums, 0, n - 2);
    const case2 = robLinear(nums, 1, n - 1);

    return Math.max(case1, case2);
};