const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const testCaseNum = input.shift();

let answer = "";
for (let i = 0; i < parseInt(testCaseNum); i++) {
  let temp = input[i].split(" ");
  answer += parseInt(temp[0]) + parseInt(temp[1]) + "\n";
}

console.log(answer);
