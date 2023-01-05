function makeTrie(words) {
  const root = {};
  for (const word of words) {
    let current = root;
    for (const char of word) {
      if (!current[char]) current[char] = [0, {}];
      current[char][0] = 1 + (current[char][0] || 0);
      current = current[char][1];
    }
  }
  return root;
}

function solution(words) {
  let answer = 0;
  const trie = makeTrie(words);

  for (const word of words) {
    let cnt = 0;
    let current = trie;
    for (const char of word) {
      cnt++;
      if (current[char][0] <= 1) {
        break;
      }
      current = current[char][1];
    }
    answer += cnt;
  }
  return answer;
}

console.log(solution(["go", "gone", "guild"]));
