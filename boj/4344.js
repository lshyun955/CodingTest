const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const testCaseNum = +input.shift();

for (let i = 0; i < testCaseNum; i++) {
  const arr = input[i].split(" ").map((v) => +v);
  const studentNum = arr.shift();
  const sum = arr.reduce((acc, v) => (acc += v));
  const avg = sum / studentNum;

  const overAvgArr = arr.filter((v) => v > avg);
  console.log(((overAvgArr.length / studentNum) * 100).toFixed(3) + "%");
}
