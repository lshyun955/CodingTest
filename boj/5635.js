// 가장 나이가 적은 사람과 가장 많은 사람을 구하기
// 학생의 수 n (1 ≤ n ≤ 100)
// 
const fs = require("fs");

const [n, ...students] = fs.readFileSync('./test.txt').toString().trim().split("\n");

const newStudents = students.map(v => v.split(' ').reverse().map((v, idx) => {
    if (idx !== 3) {
        return Number(v);
    }
    return v;
}));

newStudents.sort((a, b) => a[0]-b[0] || a[1] - b[1] || a[2] || b[2]);

console.log(newStudents.pop().pop());
console.log(newStudents.shift().pop());
