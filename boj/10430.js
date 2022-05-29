const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log((parseInt(input[0]) + parseInt(input[1])) % parseInt(input[2]));
console.log(
  ((parseInt(input[0]) % parseInt(input[2])) +
    (parseInt(input[1]) % parseInt(input[2]))) %
    parseInt(input[2])
);
console.log((parseInt(input[0]) * parseInt(input[1])) % parseInt(input[2]));
console.log(
  ((parseInt(input[0]) % parseInt(input[2])) *
    (parseInt(input[1]) % parseInt(input[2]))) %
    parseInt(input[2])
);
