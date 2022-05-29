const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const arr = [...input];
const dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

let cnt = 0;
arr.forEach((v) => {
  dial.forEach((a, idx) => {
    if ([...a].includes(v)) {
      cnt += idx + 3;
    }
  });
});
console.log(cnt);
