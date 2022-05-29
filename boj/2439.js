const fs = require("fs");
const input = parseInt(fs.readFileSync(0).toString().trim());

let answer = "";

for (let i = 0; i < input; i++) {
  answer += " ".repeat(input - (i + 1)) + "*".repeat(i + 1) + "\n";
}

console.log(answer);
