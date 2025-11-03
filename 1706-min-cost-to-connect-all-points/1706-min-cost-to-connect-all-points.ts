class UnionFind {
    private parent: number[];
    private rank: number[];

    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(0);
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }

        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (rootX > rootY) {
                this.parent[rootY] = rootX;
            } else if (rootX < rootY) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        } else {
            return false;
        }

        return true;
    }
}

function minCostConnectPoints(points: number[][]): number {
    const length = points.length;
    const uf = new UnionFind(length);
    const edges: number[][] = [];
    let answer: number = 0;
    let edgeCount: number = 0;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            let cost = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            edges.push([cost, i, j]);
        }
    }

    edges.sort((a, b) => a[0] - b[0]);

    for (const [weight, u, v] of edges) {
        if (uf.union(u, v)) {
            answer += weight;
            edgeCount++;
        }

        if (edgeCount - 1 === length) {
            return answer;
        }
    }
    return answer;
};