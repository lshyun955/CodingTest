function solution(arr) {
  const tempArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    tempArr.push(arr[i]);
    if (tempArr[tempArr.length - 1] === tempArr[tempArr.length - 2]) {
      tempArr.pop();
    }
  }

  return tempArr;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
