function solution(n) {
  let result = 0;
  let dict = {};

  dict[0] = true;
  for (let i = 1; i <= n; i++) {
    dict[(i * (i + 1)) / 2] = true;
  }

  for (let i = 1; i <= n; i++) {
    if (dict[(i * (i + 1)) / 2 - n]) result++;
  }

  return result;
}
