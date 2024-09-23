const fs = require("fs");

let [numbers, ...datas] = fs.readFileSync('./test.txt').toString().trim().split("\n");

numbers = numbers.split(' ').map(Number);
datas = datas.map(d => d.split(' ').map(Number));

const N = numbers[0];
const M = numbers[1];

const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N + 1).fill(false);

// 그래프 생성
for (let i = 0; i < M; i++) {
    const [u, v] = datas[i];
    graph[u].push(v);
    graph[v].push(u);
}

function dfs(node) {
    const stack = [node];
    while (stack.length > 0) {
        const current = stack.pop();
        if (!visited[current]) {
            visited[current] = true;
            for (const neighbor of graph[current]) {
                if (!visited[neighbor]) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

let connectedComponents = 0;

// 모든 정점에 대해 DFS 수행
for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        dfs(i);
        connectedComponents++;
    }
}

console.log(connectedComponents);