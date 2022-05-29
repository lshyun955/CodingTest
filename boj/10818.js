const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const testCaseNum = input.shift();

const arr = input[0].split(" ").map((v) => +v);

let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}

console.log(min + " " + max);
