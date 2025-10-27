function containsDuplicate(nums: number[]): boolean {
    const numsMap: Record<number, boolean> = {};

    for (const num of nums) {
        if (numsMap[num]) {
            return true;
        } else {
            numsMap[num] = true;
        }
    }

    return false;
};