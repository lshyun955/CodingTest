function solution(number) {
  let answer = 0;
  if (number.length === 3) {
    const sum = number.reduce((acc, v) => acc + v, 0);
    return sum === 0 ? 1 : 0;
  } else {
  }
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
