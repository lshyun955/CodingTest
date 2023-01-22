function solution(ingredient) {
  let answer = 0;
  // 1) 재료를 담을 스택 생성
  let stack = [];

  // 2) 재료 만큼 반목문을 돌린다.
  ingredient.forEach((food, i) => {
    // 3) 스택에 해당 재료를 담는다.
    stack.push(food);

    // 4) 스택에 4개 이상이면서 음식이 1(빵)일 경우
    if (stack.length >= 4 && food === 1) {
      // 5) 스택에 담긴 재료 4개를 뽑아 버거를 만들어본다.
      let bugger = stack.slice(stack.length - 4, stack.length).join("");

      // 6) 버거가 만들어지는 경우
      if (bugger === "1231") {
        // 7) 버거가 만들어지면 스택에서 삭제한다.
        stack.splice(stack.length - 4, stack.length);

        // 8) 버거를 만든 횟수 증가
        answer++;
      }
    }
  });
  return answer;
}
