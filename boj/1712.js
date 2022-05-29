const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

// 고정비용: x, 가변비용: y, 가격: z
// x + y*n < z*n => n을 구하는 문제
// ex) 1010 70 170 => 1010 + 70n < 170n => 1010 < 100n => n = 11
// ex2) 3 2 1 => 3 + 2n < 1n => 3 < -n => -1
const fixedCost = parseInt(input[0]);
const variableCost = parseInt(input[1]);
const price = parseInt(input[2]);
if (0 >= price - variableCost) {
  console.log(-1);
} else {
  console.log(Math.floor(fixedCost / (price - variableCost)) + 1);
}
