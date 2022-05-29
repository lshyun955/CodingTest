const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const arr = input.map((v) => +v);

let max = arr[0];
let temp = [0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
    temp.push(i);
  }
}

console.log(max);
console.log(temp[temp.length - 1] + 1);
