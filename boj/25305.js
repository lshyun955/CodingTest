const fs = require("fs");

const [cnts, scores] = fs.readFileSync('./test.txt').toString().trim().split("\n");
const targetCnts = Number(cnts.split(' ')[1]);

const sortedScores =  scores.split(' ').sort((a, b) =>  +b - +a);

console.log(sortedScores[targetCnts - 1]);