const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const testCaseNum = parseInt(input.shift());

let answer = "";
for (let i = 0; i < testCaseNum; i++) {
  let score = 0;
  let totalScore = 0;
  let arr = input[i].split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "O") {
      score += 1;
      totalScore += score;
    } else {
      score = 0;
    }
  }
  console.log(totalScore);
}
