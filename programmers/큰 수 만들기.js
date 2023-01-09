function solution(number, k) {
  const numArr = [];
  let cnt = 0;

  for (const item of number) {
    while (cnt < k && numArr[numArr.length - 1] < item) {
      numArr.pop();
      cnt++;
    }
    numArr.push(item);
  }
  while (cnt < k) {
    numArr.pop();
    cnt++;
  }
  return numArr.join("");
}

console.log(solution("1924", 2));
