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
    // T: O(n)  S: O(1)
    if (!root) return 0;

    const leftHeight = maxDepth(root.left);
    const rightHeight = maxDepth(root.right);

    let depth = Math.max(leftHeight, rightHeight);

    return depth + 1;
    
    
    
};