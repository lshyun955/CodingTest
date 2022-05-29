const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

// 조건 : [c=, c-, dz=, d-, lj, nj, s=, z=] 8개 + 한 글자 알파벳은 한 글자 씩 센다
// 배열 안의 원소들만 체크해주면 풀릴 것 같다.
let temp = input;
for (let i = 0; i < input.length; i++) {
  if (i !== 0 && input[i] === "=") {
    if (input[i - 1] === "s" || input[i - 1] === "c" || input[i - 1] === "z") {
      if (input[i - 1] === "z" && input[i - 2] === "d") {
        temp = temp.replace(input[i - 2] + input[i - 1] + input[i], "#");
        continue;
      }
      temp = temp.replace(input[i - 1] + input[i], "#");
    }
  } else if (i !== 0 && input[i] === "-") {
    if (input[i - 1] === "d" || input[i - 1] === "c") {
      temp = temp.replace(input[i - 1] + input[i], "#");
    }
  } else if (i !== 0 && input[i] === "j") {
    if (input[i - 1] === "l" || input[i - 1] === "n") {
      temp = temp.replace(input[i - 1] + input[i], "#");
    }
  }
}
console.log(temp.length);
