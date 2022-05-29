const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const testCaseNum = parseInt(input.shift());

// happy new year => 3
// h a pp y, n e w, y e a r
// ["happy", "new", "year"]
// happy 체크 => h a pp y
// a b a
let cnt = 0;
for (let i = 0; i < input.length; i++) {
  let temp = input[i];
  if (temp.length <= 2) {
    cnt += 1;
  } else {
    let temp2 = temp[0];

    for (let j = 1; j < temp.length; j++) {
      if (
        j !== 1 &&
        temp2[temp2.length - 1] !== temp[j] &&
        temp2.indexOf(temp[j]) !== -1
      ) {
        temp2 = "";
        break;
      } else {
        temp2 += temp[j];
      }
    }

    if (temp2.length !== 0) {
      cnt += 1;
    }
  }
}
console.log(cnt);
