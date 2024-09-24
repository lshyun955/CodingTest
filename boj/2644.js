const fs = require("fs");

let [number, goal, relCnt, ...datas] = fs.readFileSync('./test.txt').toString().trim().split("\n");

const personGraph = Array.from({ length: +number + 1 }, () => []);
const visited = Array.from({ length: +number + 1 }, () => false);
const result = [];
let [p, c] = goal.split(' ').map(Number);
relCnt = +relCnt;
datas = datas.map(v => v.split(' ').map(Number));

// 그래프 생성
for (let i = 0; i < relCnt; i++) {
    const [x, y] = datas[i];
    personGraph[x].push(y);
    personGraph[y].push(x);
}
console.log(personGraph);
function dfs (node, cnt) {
    cnt++;
    
    visited[node] = true;  

    if (node === c) {
        result.push(cnt);
    }

    for (let i = 0; i < personGraph[node].length; i++) {
        if (!visited[personGraph[node][i]]) {
            dfs(personGraph[node][i], cnt);
        }
    }
}

dfs(p, 0);

console.log(result.length === 0 ? -1 : result[0] - 1);
