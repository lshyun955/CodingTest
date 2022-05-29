const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
// const [N,X] = input[0].split(" ");
// N => Array.length, X => 기준
const [N, X] = input[0].split(" ");
const arr = input[1].split(" ");
let answer = "";

for (let i = 0; i < parseInt(N); i++) {
  if (parseInt(X) > parseInt(arr[i])) {
    answer += arr[i] + " ";
  }
}

console.log(answer.trimEnd());
