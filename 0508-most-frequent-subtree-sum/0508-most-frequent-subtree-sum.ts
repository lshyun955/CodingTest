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

function findFrequentTreeSum(root: TreeNode | null): number[] {
    if (!root) return [];

    const freq = new Map<number, number>();
    let maxFreq = 0;

    function postorder(node: TreeNode | null): number {
        if (!node) return 0;
        const leftSum = postorder(node.left);
        const rightSum = postorder(node.right);
        const sum = node.val + leftSum + rightSum;

        const newCount = (freq.get(sum) ?? 0) + 1;
        freq.set(sum, newCount);
        if (newCount > maxFreq) maxFreq = newCount;

        return sum;
    }

    postorder(root);

    const result: number[] = [];
    for (const [sum, count] of freq.entries()) {
        if (count === maxFreq) result.push(sum);
    }

    return result;
};