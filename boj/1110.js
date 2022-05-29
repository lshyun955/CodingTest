const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
// 1. 주어진 숫자가 10보다 작다면 앞에 0을 붙여 두 자리 숫자로 만들고, 각 자리 숫자를 더한다.
// 2. 주어진 숫자의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만든다.
// 3. ex) 26 => (2 + 6 = 8 => 68) => (6 + 8 = 14 => 84) => (8 + 4 = 12 => 42) => (6 => 26)
let addNum = 0;
let cycle = 0;
let num = parseInt(input);
let flag = true;
while (flag) {
  addNum = parseInt(num / 10) + (num % 10);
  num = (num % 10) * 10 + (addNum % 10);
  cycle++;
  if (num == input) {
    console.log(cycle);
    flag = false;
  }
}
