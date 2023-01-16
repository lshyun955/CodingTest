// 특정 범위 물걸들을 모두 싹쓸이
// 진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매
function solution(gems) {
  const keysLength = new Set(gems).size;
  const tempMap = new Map();
  let answer = [0, Infinity];
  let p1 = 0;
  let p2 = 0;
  tempMap.set(gems[0], 1);

  while (p1 < gems.length && p2 < gems.length) {
    if (tempMap.size === keysLength) {
      if (p2 - p1 < answer[1] - answer[0]) {
        answer = [p1 + 1, p2 + 1];
      }
      tempMap.set(gems[p1], tempMap.get(gems[p1]) - 1);

      if (tempMap.get(gems[p1]) === 0) {
        tempMap.delete(gems[p1]);
      }
      p1++;
    } else {
      p2++;
      tempMap.set(gems[p2], 1 + (tempMap.get(gems[p2]) || 0));
    }
  }
  return answer;
}

console.log(
  solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
);
