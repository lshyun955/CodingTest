function majorityElement(nums: number[]): number {
    function findMajority(left: number, right: number): number {
        if (left === right) return nums[left];
        
        let mid = Math.floor((left + right) / 2);
        let leftMajor = findMajority(left, mid);
        let rightMajor = findMajority(mid + 1, right);
        
        return count(nums, leftMajor, left, right) > count(nums, rightMajor, left, right) 
               ? leftMajor 
               : rightMajor;
    }

    function count(nums: number[], target: number, left: number, right: number): number {
        let cnt = 0;
        for (let i = left; i <= right; i++) {
            if (nums[i] === target) cnt++;
        }
        return cnt;
    }

    return findMajority(0, nums.length - 1);
};