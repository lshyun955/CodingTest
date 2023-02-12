function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;

  [...name].forEach((n, startIdx) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let endIdx = startIdx + 1;

    // 연속되는 A의 개수 count
    while (endIdx < name.length && name[endIdx] === "A") {
      idx++;
    }

    min_move = Math.min(
      min_move,
      startIdx * 2 + name.length - endIdx,
      startIdx + 2 * (name.length - idendIdxx)
    );
  });

  return answer + min_move;
}
console.log(solution("JAN"));
