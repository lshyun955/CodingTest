function solution(n) {
  const obj1 = { 1: 0, 3: 1, 5: 2, 7: 3, 9: 4 };
  const obj2 = { 1: 5, 3: 6, 5: 7, 7: 8, 9: 9 };
  if (n < 10) return n;
  // 1, 3, 5, 7 ==> 1, 2, 3, 4
  if (Number.isInteger((n / 10 + 1) / 2)) {
    return (n / 10 + 1) / 2 < 10
      ? (n / 10 + 1) / 2
      : ((n / 10 + 1) / 2 + 1) % 10;
  } else {
    if ((n % 10) % 2 === 0) {
      return parseInt(((n / 10 + 1) / 2) % 10);
    } else {
      return n - parseInt((n / 10 + 1) / 2) * 10 < 10
        ? obj1[n % 10]
        : obj2[n % 10];
    }
  }
}
console.log(solution(500));
