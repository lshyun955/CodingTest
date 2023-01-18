function solution(strs, t) {
  const dp = Array.from({ length: t.length }, () => 0);
  // b , ba, ban, bana, banan, banana
  // ["ba", "na", "n", "a"]
  // b없음
  // ba 있음 1
  // ban => ba n => 2
  // bana => ba na => 2
  // banan => bana n => 2 + 1 = 3
  // banana => bana na => 2 + 1 = 3
  // 최솟값 => 3

  for (let i = 1; i < t.length + 1; i++) {
    dp[i] = Infinity;

    for (let j = 1; j < Math.min(i + 1, 6); j++) {
      const start = i - j;
      const end = i;

      console.log(start, end, t.slice(start, end));
      if (strs.includes(t.slice(start, end))) {
        dp[i] = Math.min(dp[i], dp[i - j] + 1);
      }
    }
  }

  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}
console.log(solution(["ba", "na", "n", "a"], "banana"));
