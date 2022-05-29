const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const arr = input[1].split(" ").map((v) => +v);

let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

const result =
  arr.map((v) => (v / max) * 100).reduce((acc, v) => (acc += v)) /
  parseInt(input[0]);

console.log(result);
