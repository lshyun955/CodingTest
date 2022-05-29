const fs = require("fs");
const input = parseInt(fs.readFileSync(0).toString().trim());

if (input < 100) {
  console.log(input);
} else {
  let cnt = 99;
  for (let i = 100; i <= input; i++) {
    let first = parseInt(i / 100);
    let second = parseInt((i / 10) % 10);
    let third = parseInt(i % 10);
    if (third - second === second - first) {
      cnt++;
    }
  }
  console.log(cnt);
}
