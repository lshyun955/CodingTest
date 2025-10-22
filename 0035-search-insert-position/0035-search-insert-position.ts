function searchInsert(nums: number[], target: number): number {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    }

    if (nums[nums.length - 1] < target ) {
        return nums.length;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid +1;
        }
    }

    return left;
};