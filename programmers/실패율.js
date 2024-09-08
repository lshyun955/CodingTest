function solution(N, stages) {
    // stages 배열 길이가 참가자 수
    // 각 원소 값은 해당 참가자의 현재 스테이지를 나타냄
    // N은 총 스테이지 수
    // 모든 사용자가 동일한 스테이지면 해당 스테이지 제외한 나머지 스테이지는 오름차순 정렬
    const failureRateObj = Array.from({ length: N }, (_,i) => i+1).reduce((acc, curr) => {
        acc[curr] = { cnt: 0, total: 0 };
        return acc;
    }, {});
    
    if ((stages.every(stage => stage === N+1)) || (stages.every(stage => stage === 1))) {
        return Array.from({ length: N }, (_,i) => i+1).sort((a,b) => a-b);
    }

    stages.forEach(stage => {
        if (Object.keys(failureRateObj).includes(`${stage}`)) {
            failureRateObj[stage].cnt++;   
        }
    });
    
    for (const key in failureRateObj) {
        if (+key === 1) {
            failureRateObj[key].total = stages.length;
        } else {
            failureRateObj[key].total = failureRateObj[+key - 1].total - failureRateObj[+key - 1].cnt;
        }
    }
    
    const re = Object.entries(failureRateObj).sort((a, b) => {
        const ratioA = a[1].cnt / a[1].total;
        const ratioB = b[1].cnt / b[1].total;
        return ratioB - ratioA; // 비율 기준으로 내림차순 정렬
    });
    
    return re.map(r => +r[0]);
}