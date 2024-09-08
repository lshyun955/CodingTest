function solution(numbers) {
  // 서로 다른 조합 (0,1) ~ (n-1, n) 오름차순 정렬
  // 루프를 numbers 배열 기준으로 2개 돌림 
  // 시간복잡도는 O(n^2) => 배열 최대 길이가 100 이므로 최대 10000
  let answer = []; // 조합 담을 배열
  for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          const sumNum = numbers[i] + numbers[j];
          if (!answer.includes(sumNum)) {
              answer.push(sumNum);
          }
      }
  }

  answer = answer.sort((a,b) => a-b);
  
  return answer;
}