const fs = require("fs");

const [NUMBER, ...datas] = fs.readFileSync('./test.txt').toString().trim().split("\n");

const personTuples = datas.map(v => ([+v.split(' ')[0], +v.split(' ')[1]]));
const rankObject = Array.from({length: NUMBER}, (_, idx) => idx).reduce((acc, curr, index) => {
    acc[`${index}`] = { v: personTuples[index], moreBigCnt: 0 };

    return acc;
}, {});


personTuples.forEach((per, idx) => {
    for (let i = 0; i < NUMBER; i++) {
        if (i === idx) continue;

        if (((per[0] < personTuples[i][0]) && (per[1] < personTuples[i][1]))) {
            rankObject[idx].moreBigCnt++;
        }
    }
});

console.log(Object.values(rankObject).map(v => ++v.moreBigCnt).join(' '));