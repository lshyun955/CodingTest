const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let temp = [];
for (let i = 97; i <= 122; i++) {
  temp.push(input.indexOf(String.fromCharCode(i)));
}
console.log(temp.join(" "));
