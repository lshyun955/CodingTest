const fs = require("fs");

const [_, ...tcList] = fs.readFileSync('./test.txt').toString().trim().split('\n').map(Number);
const tcListArr = [];

for (let i = 0; i < tcList.length; i += 2) {
    tcListArr.push(tcList.slice(i, i + 2));
  }

for (let j = 0; j < tcListArr.length; j++) {
    const cntList = Array.from({ length: tcListArr[j][1] }, (_, i) => i + 1);  // 0층 사람들

    for (let i = 0; i < tcListArr[j][0]; i++) {
        for (let k = 1; k < cntList.length; k++) {
            cntList[k] += cntList[k - 1];
        }
    }

    console.log(cntList.pop());
}