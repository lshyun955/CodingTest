const fs = require("fs");

const datas = fs.readFileSync('./test.txt').toString().trim().split("\n");
const bingo = datas.slice(0, 5).map(v => v.split(' ')).flat();
const checked = datas.slice(5).map(v => v.split(' ')).flat();
let answer = 0;

for (let i = 0; i < checked.length; i++) {

    const checkedIndex = bingo.indexOf(checked[i]);

    bingo[checkedIndex] = 0;

    widthLengthCalc(checkedIndex, i);

    if (answer >= 3) {
        console.log(`${i + 1}`);
        break;
    }
}

function widthLengthCalc(idx, i) {
    const widthCheck = Math.floor(idx / 5);
    const lengthCheck = idx % 5;

    if (bingo.filter((v, index) => index % 5 === lengthCheck).every((b) => !b)) {
        answer++;
    }

    if (bingo.filter((v, index) => Math.floor(index / 5) === widthCheck).every((b) => !b)) {
        answer++;
    }

    if ((idx % 4 === 0 && idx < 24) && bingo.filter((v, index) => index && index % 4 === 0 && index < 24).every((b) => !b)) {
        answer++;
    }

    if (idx % 6 === 0 && bingo.filter((v, index) => index % 6 === 0 && index < 25).every((b) => !b)) {
        answer++;
    }
}