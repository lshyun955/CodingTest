function solution(array, commands) {
  // command = [start, end, num]
  let answer = [];

  commands.forEach(([start, end, num]) => {
    let temp = array.slice(start - 1, end);
    temp = temp.sort((a, b) => a - b);

    answer.push(temp[num - 1]);
  });
  return answer;
}
