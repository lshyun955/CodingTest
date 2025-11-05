class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }
    
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        
        return this.parent[x];
    }
    
    union(x,y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return false;
        
        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        
        return true;
    }
}
function solution(n, costs) {
    const uf = new UnionFind(n);
    let answer = 0;
    
    costs.sort((a, b) => a[2] - b[2]);
    
    for (const [u, v, cost] of costs) {
        if (uf.union(u, v)) {
            answer += cost;
        }
    }
    
    return answer;
}