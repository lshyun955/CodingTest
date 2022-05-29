const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const year = parseInt(input);

// 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
