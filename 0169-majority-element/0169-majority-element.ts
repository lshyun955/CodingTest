function majorityElement(nums: number[]): number {
    const numsObj: Record<number, number> = {};
    let answer = -1;

    for (const num of nums) {
        numsObj[num] = (numsObj[num] ?? 0) + 1;
    }

    let max = 0;
    for (const [key, value] of Object.entries(numsObj)) {
        if (value > max) {
            max = value;
            answer = +key;
        }
    }

    return answer;
};