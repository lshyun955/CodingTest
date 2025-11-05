function findPeakElement(nums: number[]): number {
    function binarySearch(left: number, right: number): number {
        if (left === right) return left;
 
        let mid = Math.floor((left + right) / 2);
 
        if (nums[mid] > nums[mid + 1]) {
            return binarySearch(left, mid); // Peak is on the left
        } else {
            return binarySearch(mid + 1, right); // Peak is on the right
        }
    }
 
    return binarySearch(0, nums.length - 1);
};
