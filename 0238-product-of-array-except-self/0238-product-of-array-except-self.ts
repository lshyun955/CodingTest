function productExceptSelf(nums: number[]): number[] {
    const answer = Array.from({ length: nums.length }, () => 1);

    let prefix = 1;

     for (let i = 0; i < answer.length; i++) {
        answer[i] = prefix;

        prefix *= nums[i];
     }

     let suffix = 1;

     for (let i = answer.length - 1; i > -1; i--) {
        answer[i] *= suffix;

        suffix *= nums[i];
     }

     return answer;
};