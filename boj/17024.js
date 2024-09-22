const fs = require("fs");

let [numbers, ...datas] = fs.readFileSync('./test.txt').toString().trim().split("\n");

let [_, K] = numbers.split(' ').map(Number);
datas = datas.map(Number);

const visited = new Array(datas.length).fill(false);

function dfs(cnt, node) {
    const nextNode = datas[node];

    if (visited[node] && node !== K) {
        console.log(-1);
        return;
    }
    if (node === K) {
        console.log(cnt);
        return;
    }
    const nextCnt = cnt + 1;

    visited[node] = true;
    dfs(nextCnt, nextNode);
}

dfs(0, 0);