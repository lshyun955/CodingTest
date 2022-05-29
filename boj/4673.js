let notSelfNumArr = new Set();
let selfNum = [];

for (let i = 0; i <= 10000; i++) {
  let tempNum = i;
  let tenThouNum = parseInt(i / 10000);
  let thouNum = parseInt((i % 100000) / 1000);
  let hunNum = parseInt(((i % 10000) % 1000) / 100);
  let tenNum = parseInt((((i % 10000) % 1000) % 100) / 10);
  let oneNum = parseInt((((i % 10000) % 1000) % 100) % 10);

  let sum = tenThouNum + tempNum + thouNum + hunNum + tenNum + oneNum;
  notSelfNumArr.add(sum);
  if (!notSelfNumArr.has(i)) {
    selfNum.push(i);
  }
}

selfNum.forEach((v) => {
  if (v <= 10000) {
    console.log(v);
  }
});
