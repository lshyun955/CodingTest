function solution(n) {
  let answer = 0;
  const sqrt = Math.ceil(n ** (1 / 2));
  if (sqrt ** 2 === n) {
    answer = (sqrt + 1) ** 2;
  } else {
    answer = -1;
  }

  return answer;
}
