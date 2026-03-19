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

function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;

    while (current !== null || stack.length) {
        while (current !== null) {
            // 먼저 현재 값을 push
            result.push(current.val);
            // 나중에 오른쪽 돌아오기 위해 저장
            stack.push(current);
            // 이후 왼쪽 노드로 이동
            current = current.left;
        }

        current = stack.pop()!;
        current = current.right;
    }

    return result;
};