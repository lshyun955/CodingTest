const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const arr = input.split(" ");
let cnt = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    cnt++;
  }
}
console.log(cnt);
