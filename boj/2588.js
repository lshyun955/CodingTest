const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(parseInt(input[0]) * parseInt(input[1][2]));
console.log(parseInt(input[0]) * parseInt(input[1][1]));
console.log(parseInt(input[0]) * parseInt(input[1][0]));
console.log(parseInt(input[0]) * parseInt(input[1]));
