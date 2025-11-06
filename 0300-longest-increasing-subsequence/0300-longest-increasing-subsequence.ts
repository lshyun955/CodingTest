function lengthOfLIS(nums: number[]): number {
    // 자기 자신에 대한 길이로 초기화된 dp 배열 선언
    const dp = new Array(nums.length).fill(1);

    // 포인터 한 개는 1부터 시작 -> outer loop 기준으로 최대 증가 순열
    for(let i = 1; i < nums.length; i++) {
        // inner loop는 0부터 시작해서 판별
        for (let j = 0; j < i; j++) {
            // i번째 원소보다 j번째 원소가 작을 때 i번째 길이 배열 업데이트
            if (nums[i] > nums[j]) {
                // 기존에 i번째에 저장된 길이와 j에 저장된 길이에 1 더한 값을 비교해서 큰값할당
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp)
};