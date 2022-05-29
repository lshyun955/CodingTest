const fs = require("fs");
const input = parseInt(fs.readFileSync(0).toString().trim());

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += "*".repeat(i) + "\n";
}

console.log(answer);
