const fs = require("fs");

const number = Number(fs.readFileSync('./test.txt').toString().trim());

const fibonacciArr = [0, 1];
 
for (let i = 0; i < number; i++) {
    fibonacciArr.push(BigInt(fibonacciArr[i + 1]) + BigInt(fibonacciArr[i]));
}

console.log(`${fibonacciArr[number].toString()}`);
