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

function increasingBST(root: TreeNode | null): TreeNode | null {
    function inOrder(node, tail): TreeNode | null {
        if (!node) return tail;

        let res = inOrder(node.left, node);

        node.left = null;
        node.right = inOrder(node.right, tail);

        return res;
    }

    return inOrder(root, null);
};