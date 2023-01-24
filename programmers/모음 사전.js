function solution(word) {
  let answer = 0;
  const wordObj = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  for (let i = 0; i < word.length; i++) {
    answer += 1 + wordObj[word[i]] * ((5 ** (5 - i) - 1) / 4);
  }
  return answer;
}
// A AA AAA AAAA AAAAA AAAAE AAAAI AAAAO AAAAU ....
console.log(solution("AAAE"));
