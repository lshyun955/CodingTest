function solution(s) {
  const tempArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      tempArr.push(s[i]);
    } else {
      if (tempArr.length === 0) {
        return false;
      }
      tempArr.pop();
    }
  }
  return !!!tempArr.length;
}
