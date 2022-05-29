const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const hour = parseInt(input[0]);
const min = parseInt(input[1]);

if (min >= 45) {
  console.log(`${hour} ${min - 45}`);
} else {
  if (!hour) {
    console.log(`${23} ${min + 60 - 45}`);
  } else {
    console.log(`${hour - 1} ${min + 60 - 45}`);
  }
}
