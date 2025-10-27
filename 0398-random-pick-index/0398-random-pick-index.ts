class Solution {
    private numsCountMap: Record<number, number>;
    private numsIdxArrMap: Record<number, number[]>;
    constructor(nums: number[]) {
        this.numsCountMap = {};
        this.numsIdxArrMap = {};

        nums.forEach((num, idx) => {
            this.numsCountMap[num] = (this.numsCountMap[num] ?? 0) + 1;
            
            if (this.numsIdxArrMap[num]) {
                this.numsIdxArrMap[num].push(idx);
            } else {
                this.numsIdxArrMap[num] = [idx];
            }
        });
    }

    pick(target: number): number {
        const maxNum = this.numsCountMap[target];
        const randomIdx = Math.floor(Math.random() * maxNum);

        return this.numsIdxArrMap[target][randomIdx];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */