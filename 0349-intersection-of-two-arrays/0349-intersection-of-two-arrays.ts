function intersection(nums1: number[], nums2: number[]): number[] {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const setSmall = new Set(nums1);
    const resultSet = new Set<number>();

    for (const num of nums2) {
        if (setSmall.has(num)) {
            resultSet.add(num);
        }
    }

    return Array.from(resultSet);
};