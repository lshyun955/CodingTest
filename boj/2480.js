const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const dice1 = parseInt(input[0]);
const dice2 = parseInt(input[1]);
const dice3 = parseInt(input[2]);

if (dice1 !== dice2 && dice1 !== dice3 && dice2 !== dice3) {
  if (dice1 > dice2 && dice1 > 3) {
    console.log(100 * dice1);
  } else if (dice2 > dice1 && dice2 > dice3) {
    console.log(100 * dice2);
  } else if (dice3 > dice1 && dice3 > dice2) {
    console.log(100 * dice3);
  }
} else {
  if (dice1 === dice2 && dice1 === dice3 && dice2 === dice3) {
    console.log(10000 + dice1 * 1000);
  } else if (dice1 === dice3) {
    console.log(1000 + dice1 * 100);
  } else if (dice2 === dice3) {
    console.log(1000 + dice2 * 100);
  } else if (dice2 === dice3) {
    console.log(1000 + dice2 * 100);
  } else {
    console.log(1000 + dice1 * 100);
  }
}
