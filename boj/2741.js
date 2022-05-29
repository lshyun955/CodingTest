const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const num = parseInt(input);
let answer = "";

for (let i = 1; i <= num; i++) {
  answer += i + "\n";
}

console.log(answer);
