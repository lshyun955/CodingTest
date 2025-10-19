/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrderBottom(root: TreeNode | null): number[][] {
    if (!root) return [];

    const queue: TreeNode[] = [root];
    const result: number[][] = [];
    let head = 0; // 큐의 앞부분 인덱스

    while (head < queue.length) {
        const size = queue.length - head;
        const group: number[] = [];

        for (let i = 0; i < size; i++) {
            const curr = queue[head++];
            group.push(curr.val);

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        result.push(group);
    }

    return result.reverse();
}