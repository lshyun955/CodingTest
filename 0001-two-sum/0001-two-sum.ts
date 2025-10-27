function twoSum(nums: number[], target: number): number[] {
    const numMap: Record<number, number[]> = {};
    nums.forEach((num: number, idx: number) => {
        if (!numMap[num]) {
            numMap[num] = [idx];
        } else {
            numMap[num].push(idx);
        }
    });

    for (const num of nums) {
        const num1Idx = numMap[num][0];
        let num2Idx = numMap[target - num]?.[0];

        if (target - num === num && numMap[target - num].length > 1) {
            num2Idx = numMap[num][1];
        }

        if (!num2Idx || num1Idx === num2Idx) {
            continue;
        }

        return [num1Idx, num2Idx];
    }
};