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
function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;

    while (current !== null || stack.length > 0) {
        // 왼쪽 끝까지 내려가면서 스택에 쌓기
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // 더 내려갈 곳 없으면 꺼내서 기록
        current = stack.pop()!;
        result.push(current.val);
        
        // 오른쪽으로 이동
        current = current.right;
    }

    return result;
};