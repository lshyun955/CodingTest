function solution(arr) {
  let answer = arr.reduce((acc, v) => (acc += v)) / arr.length;
  return answer;
}

console.log(solution([1, 2, 3, 4]));
