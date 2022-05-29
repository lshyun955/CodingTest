const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const testCaseNum = input.shift();

const result = input[0]
  .split("")
  .map((v) => +v)
  .reduce((acc, v) => (acc += v));
console.log(result);
