const fs = require("fs");

const [N, ...datas] = fs.readFileSync('./test.txt').toString().trim().split("\n");

// 데이터 파싱
const newDatas = datas.filter((v, idx) => idx % 2 === 1).map(v => v.split(' ').map(v => +v));

let cnt = 0;

// DFS를 이용한 순환 탐색 함수
function findLoop(arr, node, visited, startNode) {
    if (visited[node]) return false;
    visited[node] = true;

    const nextNode = arr[node] - 1;  // 배열은 0부터 시작하므로 1을 빼줌
    if (nextNode === startNode) return true;  // 시작 노드로 돌아오면 순환을 의미함
    return findLoop(arr, nextNode, visited, startNode);
}

for (let i = 0; i < N; i++) {
    const visited = new Array(newDatas[i].length).fill(false);
    cnt = 0;
    
    // 각 노드에서 순환 여부 탐색
    for (let j = 0; j < newDatas[i].length; j++) {
        if (!visited[j]) {
            if (findLoop(newDatas[i], j, visited, j)) {
                cnt++;
            }
        }
    }
    
    console.log(cnt);
}
