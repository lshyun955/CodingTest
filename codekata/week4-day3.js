const groupAnagrams = (strs) => {
  const temp = Array.from(
    new Set(strs.map((str) => str.split("").sort().join("")))
  );
  const answer = Array(temp.length)
    .fill()
    .map((u) => []);

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (temp[i] === strs[j].split("").sort().join("")) {
        answer[i].push(strs[j]);
      }
    }
  }
  return answer;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// [ 'aet', 'ant', 'abt' ]
