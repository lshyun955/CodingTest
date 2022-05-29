const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let temp = input.toUpperCase();
temp = temp.split("");
const result = {};
let temp2 = [];
//어떻게 체크를 할까?
// 일단 전달받은 문자열을 대소문자 구분하지 않기위해 대문자로 변환하자.
// ZZA => Z
temp.forEach((v) => {
  result[v] = (result[v] || 0) + 1;
});
let max = result[Object.keys(result)[0]];

for (let i = 0; i < Object.keys(result).length; i++) {
  if (result[Object.keys(result)[i]] > max) {
    max = result[Object.keys(result)[i]];
  }
}
Object.keys(result).find((k) => {
  if (result[k] === max) {
    temp2.push(k);
  }
});
if (temp2.length > 1) {
  console.log("?");
} else {
  console.log(temp2[0]);
}
