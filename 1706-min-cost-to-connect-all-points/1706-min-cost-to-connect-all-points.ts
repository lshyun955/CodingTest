function minCostConnectPoints(points: number[][]): number {
    const n = points.length;
    const visited = new Array(n).fill(false);
    const minDist = new Array(n).fill(Infinity);
    minDist[0] = 0;
    let answer = 0;

    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let j = 0; j < n; j++) {
            if (!visited[j] && (u === -1 || minDist[j] < minDist[u])) {
                u = j;
            }
        }

        visited[u] = true;
        answer += minDist[u];

        for (let v = 0; v < n; v++) {
            if (!visited[v]) {
                const dist =
                    Math.abs(points[u][0] - points[v][0]) +
                    Math.abs(points[u][1] - points[v][1]);
                minDist[v] = Math.min(minDist[v], dist);
            }
        }
    }

    return answer;
};