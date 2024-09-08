/**
 * 풀이 1
 */
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


/**
 * 풀이 2
 */
function solution(numbers) {
  // 수포자는 3명 => 패턴도 3개
  // [1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]
  // 배열 길이는 최대 10000 => O(n^2)는 시간초과 될 수 있음
  // 파라미터로 [1,2,3,4,5,1,2,3,3,3,2,1,2,3,4,5]
  // 패턴별로 정답 길이만큼 배열 생성해줘야함
  const persons = {
      1 : { "pattern": [1,2,3,4,5], "cnt": 0 },
      2 : { "pattern": [2,1,2,3,2,4,2,5], "cnt": 0 },
      3 : { "pattern": [3,3,1,1,2,2,4,4,5,5], "cnt": 0 }
  };

  // 수포자는 3명이니까 반복문 3번만 돌리면됨
  for (let i = 1; i < 4; i++) {
      const answerSheet = Array.from({ length: numbers.length }, (_,idx) => persons[i].pattern[idx % persons[i].pattern.length]);

      answerSheet.forEach((answer, idx) => {
          if (numbers[idx] === answer) {
              persons[i].cnt++;
          }
      });
  }
  
  const result = Object.entries(persons).filter(per => per[1].cnt).sort((a, b) => {
    // cnt 기준 내림차순
    if (b[1].cnt !== a[1].cnt) {
      return b[1].cnt - a[1].cnt;
    }
    // cnt가 같을 경우 키값(수포자 번호) 기준 오름차순
    return Number(a[0]) - Number(b[0]);
  });
  const MaxCnt = Math.max(...result.map(re => re[1].cnt));
  
  return result.filter(re => re[1].cnt === MaxCnt).map(d => +d[0])
}