function solution(citations) {
  let answer = 0;
  const newCitations = citations
    .sort((a, b) => b - a)
    .filter((v, idx) => {
      if (v >= idx + 1) {
        answer++;
        return v;
      }
    });
  console.log(newCitations);
  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
