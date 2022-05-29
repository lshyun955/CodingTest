const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = parseInt(input);

if (num >= 90) {
  console.log("A");
} else if (num >= 80) {
  console.log("B");
} else if (num >= 70) {
  console.log("C");
} else if (num >= 60) {
  console.log("D");
} else {
  console.log("F");
}
