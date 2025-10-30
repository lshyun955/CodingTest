/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
	if (!node) return null;

    function clone(vertex: _Node): _Node {
        if (!map.has(vertex.val)) {
            map.set(vertex.val, new _Node(vertex.val))
            map.get(vertex.val).neighbors = vertex.neighbors.map(clone);
        }

        return map.get(vertex.val);
    }

    const map = new Map<number, _Node>();

    return clone(node);
};