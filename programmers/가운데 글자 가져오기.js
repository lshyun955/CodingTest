function solution(s) {
  let answer = "";
  // abcde => c   길이 5(0~4) index 2
  // aaqwerbb => we 길이 8(0~7) index 3,4
  answer =
    s.length % 2 !== 0
      ? s[parseInt(s.length / 2)]
      : s.slice(s.length / 2 - 1, s.length / 2 + 1);
  return answer;
}
