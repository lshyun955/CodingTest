function solution(n, lost, reserve) {
    const lostOnly = lost.filter(x => !reserve.includes(x)).sort((a,b)=>a-b);
      const reserveOnly = reserve.filter(x => !lost.includes(x)).sort((a,b)=>a-b);

      // 2) 투포인터로 매칭
      let i = 0; // lostOnly 인덱스
      let j = 0; // reserveOnly 인덱스
      let matched = 0;

      while (i < lostOnly.length && j < reserveOnly.length) {
        const L = lostOnly[i];
        const R = reserveOnly[j];

        if (R < L - 1) {
          // 여분이 너무 작으면 reserve 포인터 증가
          j++;
        } else if (R > L + 1) {
          // 여분이 너무 크면 lost 포인터 증가 (다음 잃어버린 사람 확인)
          i++;
        } else {
          // |R - L| === 1 이거나 같은 경우(같으면 이미 제거되어 있지 않지만 안전하게 처리)
          matched++;
          i++;
          j++;
        }
      }

      return n - (lostOnly.length - matched);
}