function solution(n) {
  let answer = 0;
  let tempNum = n.toString(3).split("").reverse().join("");
  answer = parseInt(tempNum, 3);
  return answer;
}
solution(125);
