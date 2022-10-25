function solution(d, budget) {
  let answer = 0;
  const newArr = d.sort((a, b) => a - b);
  let total = newArr.reduce((acc, v) => acc + v, 0);
  if (total <= budget) return newArr.length;
  for (let i = 0; i < newArr.length; i++) {
    answer += newArr[i];
    if (budget < answer) {
      return i;
    }
  }
}
console.log(solution([2, 2, 3, 3], 10));
