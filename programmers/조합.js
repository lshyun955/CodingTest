function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  // 요소 순환
  arr.forEach((fixed, idx, arr) => {
    // 현재 index를 제외한 요소를 추출
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소를 제외하고 재귀 호출
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  return result;
}

console.log(combinations([3, 4, 5, 1], 2));
