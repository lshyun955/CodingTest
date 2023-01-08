// 10억명, 10억분 => 로그 시간 => 이진 탐색
// times는 10만명 => 선형 로그 시간으로 충분히 가능

// 우리가 찾는 것은 탐색이 아닌 최소 몇 분에 모든 심사가 끝나는지
// ㄴ 결정문제 => 이진 탐색 = 파라메트릭 서치(Parametric Search)

// 최소 1분에서 10억분 * n 사이
// 심사관들이 몇 명을 처리하는가
// 처리가능한 입국자가 n보다 작다면, 분을 돌려야하고, 입국자가 n보다 크다면 분을 낮춰야.
// 심사관이 시간대비 몇 명을 처리할 수 있는가
// 시간 / 심사시간 = 심사관 당 처리 가능한 입국자 수
function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b);
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
