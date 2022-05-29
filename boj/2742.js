const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const num = parseInt(input);

let answer = "";

for (let i = num; i > 0; i--) {
  answer += i + "\n";
}

console.log(answer);
