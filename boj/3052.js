const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const arr = input.map((v) => +v % 42);
let count = 0;
const result = new Set(arr);

console.log(Array.from(result).length);
