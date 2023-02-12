function solution(people, limit) {
  // 최대 2명 밖에 보트에 타지 못함
  // 무게 제한 : limit
  let answer = 0;
  let i = 0;
  let j = people.length - 1;
  people.sort((a, b) => a - b);
  while (i <= j) {
    if (people[i] + people[j] <= limit) i += 1;

    answer += 1;
    j -= 1;
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
