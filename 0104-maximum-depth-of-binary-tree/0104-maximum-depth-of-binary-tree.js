/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
    
    if (root === null) return 0;

    const leftLength = maxDepth(root.left); // DFS
    const rightLength = maxDepth(root.right);

    return Math.max(leftLength, rightLength) + 1;

};