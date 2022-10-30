function solution(number) {
  const tempArr = [];
  if (number.length === 3) {
    const sum = number.reduce((acc, v) => acc + v, 0);
    return sum === 0 ? 1 : 0;
  } else {
    const numArr = number.sort((a, b) => a - b);
    for (let i = 0; i < numArr.length - 2; i++) {
      for (let j = i + 1; j < numArr.length - 1; j++) {
        for (let z = j + 1; z < numArr.length; z++) {
          tempArr.push(numArr[i] + numArr[j] + numArr[z]);
        }
      }
    }
  }

  return tempArr.filter((num) => num === 0).length;
}

console.log(solution([-2, 3, 0, 2, -5]));
// 012 013 014 023 024 123 124 234
