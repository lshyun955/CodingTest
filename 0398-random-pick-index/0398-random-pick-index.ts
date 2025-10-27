class Solution {
    private numsIdxArrMap: Record<number, number[]>;
    constructor(nums: number[]) {
        this.numsIdxArrMap = {};

        nums.forEach((num, idx) => {
            if (this.numsIdxArrMap[num]) {
                this.numsIdxArrMap[num].push(idx);
            } else {
                this.numsIdxArrMap[num] = [idx];
            }
        });
    }

    pick(target: number): number {
        return this.numsIdxArrMap[target][Math.floor(Math.random() * this.numsIdxArrMap[target].length)];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */