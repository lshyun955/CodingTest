function intersection(nums1: number[], nums2: number[]): number[] {
    const interSectionSet: Set<number> = new Set();

    if (nums1.length > nums2.length) {
        for (const num of nums2) {
            if (nums1.includes(num)) {
                interSectionSet.add(num);
            }
        }
    } else {
        for (const num of nums1) {
            if (nums2.includes(num)) {
                interSectionSet.add(num);
            }
        }
    }

    return [...interSectionSet];
};