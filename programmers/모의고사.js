function solution(answers) {
  let answer = [];
  // 학생 별 맞은 문제의 수를 객체에 담으려고 check 객체 선언
  let temp = [0, 0, 0];
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 문제가 [1,2,3,4,5,1,2,1,2,1,2,1,2]라면, [1,2,3,4,5]패턴의 학생과 비교했을 때
  // 0~4인덱스로 한 번 비교하고, 다시 0으로 초기화해서 다시 돌고 문제 길이만큼 반복
  // 만약 문제가 [1,2,3]라면, [1,2,3,4,5]패턴의 학생과 비교했을 때,
  // 문제배열 길이만큼 반복해서 체크
  // 결국 문제배열을 기준으로 루프를 돌아야함.
  // 결국 %연산자로 0부터 인덱스를 나오게 하면 된다.
  // console.log(temp);
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % first.length]) {
      temp[0]++;
    }
    if (answers[i] === second[i % second.length]) {
      temp[1]++;
    }
    if (answers[i] === third[i % third.length]) {
      temp[2]++;
    }
  }
  console.log(temp);

  let max = temp[0];
  for (let j = 0; j < temp.length; j++) {
    if (max < temp[j]) {
      max = temp[j];
    }
  }

  for (let k = 0; k < temp.length; k++) {
    if (temp[k] === max) answer.push(k + 1);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
