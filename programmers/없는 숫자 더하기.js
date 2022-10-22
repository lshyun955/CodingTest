function solution(numbers) {
  const total = numbers.reduce((acc, v) => acc + v, 0);
  return 45 - total;
}
