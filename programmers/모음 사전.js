// function solution(word) {
//   let answer = 0;
//   const wordObj = { A: 0, E: 1, I: 2, O: 3, U: 4 };
//   for (let i = 0; i < word.length; i++) {
//     answer += 1 + wordObj[word[i]] * ((5 ** (5 - i) - 1) / 4);
//   }
//   return answer;
// }
// A AA AAA AAAA AAAAA AAAAE AAAAI AAAAO AAAAU ....

function solution(word) {
  let answer = [];
  const wordList = ["", "A", "E", "I", "O", "U"];

  const dfs = (n, str) => {
    if (n === 0) {
      answer.push(str);
      return;
    }
    for (let i = 0; i < wordList.length; i++) {
      dfs(n - 1, `${str}${wordList[i]}`);
    }
  };

  dfs(5, "");
  return [...new Set(answer)].sort().indexOf(word);
}
console.log(solution("AAAAE"));
