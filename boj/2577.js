const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const arr = input.map((v) => +v);
let result = new Array(10);
result = result.fill(0);

const multiply = arr[0] * arr[1] * arr[2];

let temp = multiply.toString().split("");
temp = Array.from(temp);
temp = temp.map((v) => +v);

for (let i = 0; i < temp.length; i++) {
  result[temp[i]] += 1;
}

result.forEach((v) => console.log(v));
