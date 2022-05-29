const fs = require("fs");
const [num1, num2] = fs.readFileSync(0).toString().trim().split(" ");

let newNum1 = num1.toString().split("").reverse().join("");
let newNum2 = num2.toString().split("").reverse().join("");

if (newNum1 < 0) {
  newNum1 = num1.toString().split("");
  newNum1.shift();
  newNum1 = parseInt(-newNum1);
} else {
  newNum1 = parseInt(newNum1);
}
if (newNum2 < 0) {
  newNum2 = num1.toString().split("");
  newNum2.shift();
  newNum2 = parseInt(-newNum2);
} else {
  newNum2 = parseInt(newNum2);
}

if (newNum1 > newNum2) {
  console.log(newNum1);
} else {
  console.log(newNum2);
}
