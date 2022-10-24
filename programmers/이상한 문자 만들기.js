function solution(s) {
  const tempArr = s.split(" ").map((v) => {
    if (v.length === 0) {
      return v;
    } else {
      let answer = v[0].toUpperCase();
      for (let i = 1; i < v.length; i++) {
        answer += i % 2 === 0 ? v[i].toUpperCase() : v[i].toLowerCase();
      }
      return answer;
    }
  });
  return tempArr.join(" ");
}
solution(" asdf asdf asdf a a a a");
