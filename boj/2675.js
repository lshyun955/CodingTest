const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const testCaseNum = parseInt(input.shift());
let answer = "";
for (let i = 0; i < testCaseNum; i++) {
  let arr = input[i].split(" ");
  for (let j = 0; j < parseInt(arr[1].length); j++) {
    answer += arr[1][j].repeat(parseInt(arr[0]));
  }
  if (!(i === testCaseNum - 1)) {
    answer += "\n";
  }
}
console.log(answer);
